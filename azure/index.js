'use strict';

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _schema = require('./data/schema');

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _subscriptionHandler = require('./server/subscriptionHandler');

var _subscriptionHandler2 = _interopRequireDefault(_subscriptionHandler);

require('./scripts/updateSchema');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//******************************* end import  *************************************************/


//however you don't have to explicitly call the generateSchemaJSON method, as it's automatically 
//callel everytime the file is loaded (node loads that module)
// append below line before graphQLServer.use('/'...)
//graphQLServer.use(_express2.default.static('./public'));  //iis-node set current directory to 'azure'
// require('babel-polyfill'); doesn't work!
//If you are using ES6’s import syntax in your application’s entry point, you should instead import the polyfill at the top of the entry point to ensure the polyfills are loaded first
var GRAPHQL_PORT = process.env.port || 8081;
// Expose a GraphQL endpoint

//if you don't have below line, nodemon won't re-load generateSchemaJson, 
//and as such your old schema.json is used
var graphQLServer = (0, _express2.default)();
graphQLServer.use(_bodyParser2.default.json());
graphQLServer.use(_express2.default.static('./public'));  //iis-node set current directory to 'azure'
graphQLServer.use('/', (0, _expressGraphql2.default)({ schema: _schema.schema, graphiql: true, pretty: true }));
var httpServer = graphQLServer.listen(GRAPHQL_PORT, function () {
  return console.log('GraphQL Server is now running on http://localhost:' + GRAPHQL_PORT);
});

var io = (0, _socket2.default)(httpServer);
io.on('connection', function (socket) {
  socket.on('graphql:subscription', function () {
    var _ref = (0, _asyncToGenerator3.default)(regeneratorRuntime.mark(function _callee(request) {
      var initialPayload;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _subscriptionHandler2.default.subscribe(request, function (updatedPayload) {
                socket.emit('graphql:subscription', updatedPayload);
              });

            case 2:
              initialPayload = _context.sent;

              socket.emit('graphql:subscription', initialPayload);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});

//# sourceMappingURL=index.js.map