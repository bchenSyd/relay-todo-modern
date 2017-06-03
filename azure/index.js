'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _schema = require('./data/schema');

require('./scripts/updateSchema');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//however you don't have to explicitly call the generateSchemaJSON method, as it's automatically 
//callel everytime the file is loaded (node loads that module)
var GRAPHQL_PORT = process.env.port || 8081;

// Expose a GraphQL endpoint


//*****************************************************************************************/

//if you don't have below line, nodemon won't re-load generateSchemaJson, 
//and as such your old schema.json is used
var graphQLServer = (0, _express2.default)();
graphQLServer.use(_express2.default.static('./public'));  //iis-node set current directory to 'azure'
graphQLServer.use('/', (0, _expressGraphql2.default)({ schema: _schema.schema, graphiql: true, pretty: true }));
graphQLServer.listen(GRAPHQL_PORT, function () {
  return console.log('GraphQL Server is now running on http://localhost:' + GRAPHQL_PORT);
});

//# sourceMappingURL=index.js.map