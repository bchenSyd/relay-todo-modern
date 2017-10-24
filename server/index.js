// @flow

// require('babel-polyfill'); doesn't work!
// If you are using ES6’s import syntax in your application’s entry point, you should instead import the polyfill at the top of the entry point to ensure the polyfills are loaded first
import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import graphQLHTTP from 'express-graphql';
import { schema } from './data/schema';
import IO from 'socket.io';
import subscriptionHandler from './subscriptionHandler';
//if you don't have below line, nodemon won't re-load generateSchemaJson, 
//and as such your old schema.json is used
import './scripts/updateSchema';
//******************************* end import  *************************************************/


//however you don't have to explicitly call the generateSchemaJSON method, as it's automatically 
//callel everytime the file is loaded (node loads that module)
const GRAPHQL_PORT = process.env.port || 8081;
// Expose a GraphQL endpoint
const app = express();
app.use(bodyParser.json());
// *********************************************************************************
// must be the right order; static file first!
app.use('/', express.static('heroku/public'));
app.use('/', graphQLHTTP({ schema, graphiql: true, pretty: true }));
// *********************************************************************************

const httpServer = app.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
));

const io = IO(httpServer);
io.on('connection', socket => {
  socket.on('graphql:subscription', async request => {
    var initialPayload = await subscriptionHandler.subscribe(request, updatedPayload => {
      socket.emit('graphql:subscription', updatedPayload);
    });
    socket.emit('graphql:subscription', initialPayload);
  });
});

