'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = undefined;

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _graphqlRelaySubscription = require('graphql-relay-subscription');

var _database = require('./database');

var _unibetIds = require('./unibetIds');

var _casual = require('casual');

var _casual2 = _interopRequireDefault(_casual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _nodeDefinitions = (0, _graphqlRelay.nodeDefinitions)(function (globalId) {
  var _fromGlobalId_unibet = (0, _unibetIds.fromGlobalId_unibet)(globalId),
      type = _fromGlobalId_unibet.type,
      id = _fromGlobalId_unibet.id;

  if (type === 'Todo') {
    return (0, _database.getTodo)(id);
  } else if (type === 'User') {
    return (0, _database.getUser)(id);
  }
  return null;
}, function (obj) {
  if (obj instanceof _database.Todo) {
    return GraphQLTodo;
  } else if (obj instanceof _database.User) {
    return GraphQLUser;
  }
  return null;
}),
    nodeInterface = _nodeDefinitions.nodeInterface,
    nodeField = _nodeDefinitions.nodeField;

var GraphQLTodo = new _graphql.GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: (0, _unibetIds.globalIdField_unibet)('Todo'),
    text: {
      type: _graphql.GraphQLString,
      resolve: function resolve(obj) {
        return obj.text;
      }
    },
    complete: {
      type: _graphql.GraphQLBoolean,
      resolve: function resolve(obj) {
        return obj.complete;
      }
    },
    status: {
      type: _graphql.GraphQLString,
      resolve: function resolve() {
        return _casual2.default.random_element(['open', 'suspended', 'finished']);
      }
    },
    details: {
      type: _graphql.GraphQLString,
      resolve: function resolve() {
        return 'details. data=' + _casual2.default.integer(1, 100);
      }
    }
  },
  interfaces: [nodeInterface]
});

var _connectionDefinition = (0, _graphqlRelay.connectionDefinitions)({
  name: 'Todo',
  nodeType: GraphQLTodo
}),
    TodosConnection = _connectionDefinition.connectionType,
    GraphQLTodoEdge = _connectionDefinition.edgeType;

var GraphQLUser = new _graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: (0, _unibetIds.globalIdField_unibet)('User'),
    todos: {
      type: TodosConnection,
      args: (0, _extends3.default)({
        status: {
          type: _graphql.GraphQLString,
          defaultValue: 'any'
        }
      }, _graphqlRelay.connectionArgs),
      resolve: function resolve(obj, _ref) {
        var status = _ref.status,
            _ = _ref._,
            args = (0, _objectWithoutProperties3.default)(_ref, ['status', '_']);
        return (0, _graphqlRelay.connectionFromArray)((0, _database.getTodos)(status), args);
      }
    },
    totalCount: {
      type: _graphql.GraphQLInt,
      resolve: function resolve() {
        return (0, _database.getTodos)().length;
      }
    },
    completedCount: {
      type: _graphql.GraphQLInt,
      resolve: function resolve() {
        return (0, _database.getTodos)('completed').length;
      }
    },
    echo: {
      type: _graphql.GraphQLInt,
      args: {
        _: {
          type: _graphql.GraphQLInt,
          defaultValue: 0
        }
      },
      resolve: function resolve(obj, _ref4) {
        var _ = _ref4._;
        return _;
      }
    }
  },
  interfaces: [nodeInterface]
});

var Query = new _graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    viewer: {
      type: new _graphql.GraphQLObjectType({
        name: 'Viewer', // this will trigger viewerhandler
        fields: {
          user: {
            type: GraphQLUser,
            resolve: function resolve() {
              return (0, _database.getViewer)();
            }
          }
        }
      }),
      resolve: function resolve() {
        return {};
      }
    },
    node: nodeField
  }
});

var GraphQLAddTodoMutation = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'AddTodo',
  inputFields: {
    text: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
  },
  outputFields: {
    todoEdge: {
      type: GraphQLTodoEdge,
      resolve: function resolve(_ref5) {
        var localTodoId = _ref5.localTodoId;

        var todo = (0, _database.getTodo)(localTodoId);
        return {
          cursor: (0, _graphqlRelay.cursorForObjectInConnection)((0, _database.getTodos)(), todo),
          node: todo
        };
      }
    },
    viewer: {
      type: GraphQLUser,
      resolve: function resolve() {
        return (0, _database.getViewer)();
      }
    }
  },
  mutateAndGetPayload: function mutateAndGetPayload(_ref6) {
    var text = _ref6.text;

    var localTodoId = (0, _database.addTodo)(text);
    return { localTodoId: localTodoId };
  }
});

var GraphQLChangeTodoStatusMutation = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'ChangeTodoStatus',
  inputFields: {
    complete: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean) },
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) }
  },
  outputFields: {
    todo: {
      type: GraphQLTodo,
      resolve: function resolve(_ref7) {
        var localTodoId = _ref7.localTodoId;
        return (0, _database.getTodo)(localTodoId);
      }
    },
    viewer: {
      type: GraphQLUser,
      resolve: function resolve() {
        return (0, _database.getViewer)();
      }
    }
  },
  mutateAndGetPayload: function mutateAndGetPayload(_ref8) {
    var id = _ref8.id,
        complete = _ref8.complete;


    var localTodoId = (0, _unibetIds.fromGlobalId_unibet)(id).id;
    (0, _database.changeTodoStatus)(localTodoId, complete);
    return { localTodoId: localTodoId };
  }
});

var GraphQLMarkAllTodosMutation = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'MarkAllTodos',
  inputFields: {
    complete: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean) }
  },
  outputFields: {
    changedTodos: {
      type: new _graphql.GraphQLList(GraphQLTodo),
      resolve: function resolve(_ref9) {
        var changedTodoLocalIds = _ref9.changedTodoLocalIds;
        return changedTodoLocalIds.map(_database.getTodo);
      }
    },
    viewer: {
      type: GraphQLUser,
      resolve: function resolve() {
        return (0, _database.getViewer)();
      }
    }
  },
  mutateAndGetPayload: function mutateAndGetPayload(_ref10) {
    var complete = _ref10.complete;

    var changedTodoLocalIds = (0, _database.markAllTodos)(complete);
    return { changedTodoLocalIds: changedTodoLocalIds };
  }
});

// TODO: Support plural deletes
var GraphQLRemoveCompletedTodosMutation = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'RemoveCompletedTodos',
  outputFields: {
    deletedTodoIds: {
      type: new _graphql.GraphQLList(_graphql.GraphQLString),
      resolve: function resolve(_ref11) {
        var deletedTodoIds = _ref11.deletedTodoIds;
        return deletedTodoIds;
      }
    },
    viewer: {
      type: GraphQLUser,
      resolve: function resolve() {
        return (0, _database.getViewer)();
      }
    }
  },
  mutateAndGetPayload: function mutateAndGetPayload() {
    var deletedTodoLocalIds = (0, _database.removeCompletedTodos)();
    var deletedTodoIds = deletedTodoLocalIds.map(_graphqlRelay.toGlobalId.bind(null, 'Todo'));
    return { deletedTodoIds: deletedTodoIds };
  }
});

var GraphQLRemoveTodoMutation = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'RemoveTodo',
  inputFields: {
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) }
  },
  outputFields: {
    deletedTodoId: {
      type: _graphql.GraphQLID,
      resolve: function resolve(_ref12) {
        var id = _ref12.id;
        return id;
      }
    },
    viewer: {
      type: GraphQLUser,
      resolve: function resolve() {
        return (0, _database.getViewer)();
      }
    }
  },
  mutateAndGetPayload: function mutateAndGetPayload(_ref13) {
    var id = _ref13.id;

    var localTodoId = (0, _unibetIds.fromGlobalId_unibet)(id).id;
    (0, _database.removeTodo)(localTodoId);
    return { id: id };
  }
});

var GraphQLRenameTodoMutation = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'RenameTodo',
  inputFields: {
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
    text: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
  },
  outputFields: {
    todo: {
      type: GraphQLTodo,
      resolve: function resolve(_ref14) {
        var localTodoId = _ref14.localTodoId;
        return (0, _database.getTodo)(localTodoId);
      }
    }
  },
  mutateAndGetPayload: function mutateAndGetPayload(_ref15) {
    var id = _ref15.id,
        text = _ref15.text;

    var localTodoId = (0, _unibetIds.fromGlobalId_unibet)(id).id;
    (0, _database.renameTodo)(localTodoId, text);
    return { localTodoId: localTodoId };
  }
});

var Mutation = new _graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTodo: GraphQLAddTodoMutation,
    changeTodoStatus: GraphQLChangeTodoStatusMutation,
    markAllTodos: GraphQLMarkAllTodosMutation,
    removeCompletedTodos: GraphQLRemoveCompletedTodosMutation,
    removeTodo: GraphQLRemoveTodoMutation,
    renameTodo: GraphQLRenameTodoMutation
  }
});

var GraphqlTodoSubscription = (0, _graphqlRelaySubscription.subscriptionWithClientId)({
  name: 'TodoSubScription',
  inputFields: function inputFields() {
    return {
      arg: { type: _graphql.GraphQLString }
    };
  },
  outputFields: function outputFields() {
    return {
      arg: { type: _graphql.GraphQLString }, // useless, just for demo purpose 
      todo: { //useful!!
        type: GraphQLTodo,
        resolve: function resolve(_ref16) {
          var localTodoId = _ref16.localTodoId;

          return typeof localTodoId !== 'undefined' ? (0, _database.getTodo)(localTodoId) : null;
        }
      }
    };
  },
  //subscription mode;
  subscribe: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref17, context) {
      var arg = _ref17.arg;
      var subscript2RabbitMQ;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              subscript2RabbitMQ = context.subscript2RabbitMQ;

              subscript2RabbitMQ();
              return _context.abrupt('return', { localTodoId: undefined, arg: arg });

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function subscribe(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }(),
  //payload mode (event emitter mode)
  getPayload: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref18, _ref19) {
      var localTodoId = _ref18.localTodoId;
      var arg = _ref19.arg;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt('return', { localTodoId: localTodoId, arg: arg });

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function getPayload(_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }()
});

var Subscription = new _graphql.GraphQLObjectType({
  name: 'Subscription',
  fields: {
    todoSubScription: GraphqlTodoSubscription
  }
});

var schema = exports.schema = new _graphql.GraphQLSchema({
  query: Query,
  mutation: Mutation,
  subscription: Subscription
});
//# sourceMappingURL=schema.js.map