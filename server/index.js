// @flow
require('babel-polyfill');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const graphQLHTTP = require('express-graphql');
const { schema } = require('./data/schema');
const IO = require('socket.io');
const subscriptionHandler = require('./subscriptionHandler');
//if you don't have below line, nodemon won't re-load generateSchemaJson,
//and as such your old schema.json is used
require('./scripts/updateSchema');
//******************************* end import  *************************************************/

//however you don't have to explicitly call the generateSchemaJSON method, as it's automatically
//called every time the file is loaded (node loads that module)
const GRAPHQL_PORT = process.env.PORT || 8081;
// Expose a GraphQL endpoint
const app = express();
app.use(bodyParser.json());
// *********************************************************************************
// must be the right order; static file first!
app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use('/', graphQLHTTP({ schema, graphiql: true, pretty: true }));
// *********************************************************************************

const httpServer = app.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
  )
);

const io = IO(httpServer);
io.on('connection', socket => {
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
