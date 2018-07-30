const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');
const { connectionArgs, connectionFromArray } = require('graphql-relay');
const { globalIdField_unibet } = require('../unibetIds');
const { nodeInterface } = require('./nodeInterface');
const { getTodos } = require('../../database');
const { GraphQLTodoConnection } = require('./todo');

const GraphQLUser = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: globalIdField_unibet('User'),
    todos: {
      type: GraphQLTodoConnection,
      args: {
        status: {
          type: GraphQLString,
          defaultValue: 'any',
        },
        ...connectionArgs,
      },
      resolve: async (obj, { status, ...args }) => {
        const todos = await getTodos(status);
        return connectionFromArray(todos, args);
      },
    },
    totalCount: {
      type: GraphQLInt,
      resolve: async () => {
        const todos = await getTodos();
        return todos.length;
      },
    },
    completedCount: {
      type: GraphQLInt,
      resolve: async () => {
        const todos = await getTodos('completed');
        return todos.length;
      },
    },
    echo: {
      type: GraphQLInt,
      args: {
        _: {
          type: GraphQLInt,
          defaultValue: 0,
        },
      },
      resolve: (obj, { _ }) => _,
    },
  },
  interfaces: [nodeInterface],
});

module.exports = {
  GraphQLUser,
};
