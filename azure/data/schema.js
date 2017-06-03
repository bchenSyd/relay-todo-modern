'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _database = require('./database');

var _unibetIds = require('./unibetIds');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

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
    additional: {
      type: _graphql.GraphQLString,
      resolve: function resolve() {
        return 'additional #' + Math.floor(Math.random() * 100) + ' ';
      }
    },
    comments: {
      type: _graphql.GraphQLString,
      resolve: function resolve() {
        return 'comments #' + Math.floor(Math.random() * 100) + ' ';
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
        return (0, _graphqlRelay.connectionFromArray)((0, _database.getTodos)(status, _), args);
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
      resolve: function resolve(obj, _ref2) {
        var _ = _ref2._;
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
      resolve: function resolve(_ref3) {
        var localTodoId = _ref3.localTodoId;

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
  mutateAndGetPayload: function mutateAndGetPayload(_ref4) {
    var text = _ref4.text;

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
      resolve: function resolve(_ref5) {
        var localTodoId = _ref5.localTodoId;
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
  mutateAndGetPayload: function mutateAndGetPayload(_ref6) {
    var id = _ref6.id,
        complete = _ref6.complete;

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
      resolve: function resolve(_ref7) {
        var changedTodoLocalIds = _ref7.changedTodoLocalIds;
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
  mutateAndGetPayload: function mutateAndGetPayload(_ref8) {
    var complete = _ref8.complete;

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
      resolve: function resolve(_ref9) {
        var deletedTodoIds = _ref9.deletedTodoIds;
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
      resolve: function resolve(_ref10) {
        var id = _ref10.id;
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
  mutateAndGetPayload: function mutateAndGetPayload(_ref11) {
    var id = _ref11.id;

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
      resolve: function resolve(_ref12) {
        var localTodoId = _ref12.localTodoId;
        return (0, _database.getTodo)(localTodoId);
      }
    }
  },
  mutateAndGetPayload: function mutateAndGetPayload(_ref13) {
    var id = _ref13.id,
        text = _ref13.text;

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

var schema = exports.schema = new _graphql.GraphQLSchema({
  query: Query,
  mutation: Mutation
});
//# sourceMappingURL=schema.js.map