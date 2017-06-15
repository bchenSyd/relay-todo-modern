import express from 'express';
import bodyParser from 'body-parser';
import graphQLHTTP from 'express-graphql';
import {schema} from './data/schema';
import IO from 'socket.io';
import subscriptionHandler from './server/subscriptionHandler';
//*****************************************************************************************/

//if you don't have below line, nodemon won't re-load generateSchemaJson, 
//and as such your old schema.json is used
import './scripts/updateSchema';
//however you don't have to explicitly call the generateSchemaJSON method, as it's automatically 
//callel everytime the file is loaded (node loads that module)
const GRAPHQL_PORT = process.env.port || 8081;

// Expose a GraphQL endpoint
const graphQLServer = express();
graphQLServer.use(bodyParser.json());
graphQLServer.use('/', graphQLHTTP({schema, graphiql: true, pretty: true}));
const httpServer = graphQLServer.listen(GRAPHQL_PORT, () => console.log(
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

