const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString,
} = require('graphql');
const { connectionDefinitions } = require('graphql-relay');
const casual = require('casual');
const { globalIdField_unibet } = require('../unibetIds');
const { nodeInterface } = require('./nodeInterface');

const GraphQLTodo = new GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: globalIdField_unibet('Todo'),
    text: {
      type: new GraphQLNonNull(GraphQLString),
      // resolve: obj => obj.text, if exactly match, you can omit resolve method;
    },
    completed: {
      type: new GraphQLNonNull(GraphQLBoolean),
      resolve: obj => obj.completed === true.toString(),
    },
    status: {
      type: GraphQLString,
      resolve: () => casual.random_element(['open', 'suspended', 'finished']),
    },
    details: {
      type: GraphQLString,
      resolve: () => `details. data=${casual.integer(1, 100)}`,
    },
  },
  interfaces: [nodeInterface],
});

const {
  connectionType: GraphQLTodoConnection,
  edgeType: GraphQLTodoEdge,
} = connectionDefinitions({
  name: 'Todo',
  nodeType: GraphQLTodo,
});

module.exports = {
  GraphQLTodo,
  GraphQLTodoConnection,
  GraphQLTodoEdge,
};
