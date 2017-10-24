'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _graphql = require('graphql');

var _graphqlRelaySubscription = require('graphql-relay-subscription');

var _schema = require('./data/schema');

var _events = require('./events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//https://github.com/bochen2014/graphql-relay-subscription
var subscribe = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, updateCallback) {
    var query, variables, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('subscribe begin...');
            query = request.query, variables = request.variables;
            _context.next = 4;
            return (0, _graphqlRelaySubscription.graphqlSubscribe)({
              schema: _schema.schema,
              query: query,
              context: {
                subscript2RabbitMQ: function subscript2RabbitMQ() {
                  console.log('pubSub.sub(\'amqp.changes\', msg=>{ .....  })');
                  _subscript2RabbitMQ(query, variables, updateCallback);
                }
              },
              variables: variables
            });

          case 4:
            result = _context.sent;
            return _context.abrupt('return', result);

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function subscribe(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _subscript2RabbitMQ = function _subscript2RabbitMQ(query, variables, updateCallback) {
  _events2.default.on('amqp.changes', function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(msg) {
      var localTodoId, updatedPayload;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              localTodoId = msg.id;
              _context2.next = 3;
              return (0, _graphql.graphql)(_schema.schema, query, { localTodoId: localTodoId }, null, variables);

            case 3:
              updatedPayload = _context2.sent;

              updateCallback(updatedPayload);

            case 5:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }());
};

exports.default = { subscribe: subscribe };
//# sourceMappingURL=subscriptionHandler.js.map