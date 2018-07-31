require('babel-polyfill');
const path = require('path');
const express = require('express');
const graphQLHTTP = require('express-graphql');
const IO = require('socket.io');
const chalk = require('chalk');
const pWaterfall = require('p-waterfall');
const bodyParser = require('body-parser');

const redis = require('./redis-promisified');
const { initRaces, getRaces } = require('./data/redis');
const { schema } = require('./data/schema');
const subscriptionHandler = require('./subscriptionHandler');
//if you don't have below line, nodemon won't re-load generateSchemaJson,
//and as such your old schema.json is used
require('./scripts/updateSchema');
//however you don't have to explicitly call the generateSchemaJSON method, as it's automatically
//called every time the file is loaded (node loads that module)

const app = express();
app.use(bodyParser.json());  
app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use('/graphql', graphQLHTTP({ schema, graphiql: true, pretty: true }));

const connect_redis = () =>
  new Promise((resolve, reject) => {
    // http://redis.js.org/
    const redis_client = redis.createClient({
      host: 'localhost', // default '127.0.0.1'
      port: 6379,
    });
    redis_client.on('connect', async () => {
      console.log(
        chalk.green('you now have successfully connected to redis server')
      );
      await initRaces(redis_client);
      const races = await getRaces();
      console.log(chalk.gray('current races: '), races);
      resolve();
    });
    redis_client.on('error', error => {
      console.error(error);
      reject(error);
    });
    redis_client.on('end', () => {
      console.log(chalk.cyan(' you have disconnected from redis server'));
    });
  });

const start_httpServer = () =>
  new Promise(resolve => {
    const GRAPHQL_PORT = process.env.PORT || 8082;
    const httpServer = app.listen(GRAPHQL_PORT, () => {
      console.log(
        chalk.green(
          `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
        )
      );
      resolve(httpServer);
    });
  });

const start_socketIO = httpServer =>
  new Promise(resolve => {
    const ioServer = IO(httpServer);
    // todo: must unsubscribe with socketIO disconnect otherwise memory leak
    ioServer.on('connection', socket => {
      socket.on('graphql:subscription', async request => {
        var initialPayload = await subscriptionHandler.subscribe(
          request,
          updatedPayload => {
            socket.emit('graphql:subscription', updatedPayload);
          }
        );
        socket.emit('graphql:subscription', initialPayload);
      });
    });
    console.log(
      chalk.green('socket io is listening for client connections...')
    );
    resolve([httpServer, ioServer]);
  });

const tasks = [connect_redis, start_httpServer, start_socketIO];
pWaterfall(tasks).then(([httpServer, ioServer]) => {
  console.log(' -- ready to go!');
});
