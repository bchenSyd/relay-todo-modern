const {
    GraphQLBoolean,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
  } = require('graphql');
  
  const {
    connectionArgs,
    connectionDefinitions,
    connectionFromArray,
    cursorForObjectInConnection,
    fromGlobalId,
    globalIdField,
    mutationWithClientMutationId,
    nodeDefinitions,
    toGlobalId,
  } = require('graphql-relay');
  
  const { subscriptionWithClientId } = require('graphql-relay-subscription');
  const chalk = require('chalk');
  const {
    Todo,
    User,
    addTodo,
    changeTodoStatus,
    getTodo,
    getTodos,
    getViewer,
    markAllTodos,
    removeCompletedTodos,
    removeTodo,
    renameTodo,
  } = require('./database');
  
  const { globalIdField_unibet, fromGlobalId_unibet } = require('./unibetIds');
  const casual = require('casual');
  
  const { nodeInterface, nodeField } = nodeDefinitions(
    async globalId => {
      const { type, id } = fromGlobalId_unibet(globalId);
      if (type === 'Todo') {
        const todo = await getTodo(id);
        return todo;
      } else if (type === 'User') {
        return getViewer(id);
      }
      console.log(
        chalk.red(
          `Client has submitted a node id which can't be resolved to an object`
        )
      );
      return null;
    },
    obj => {
      if (obj instanceof Todo) {
        return GraphQLTodo;
      } else if (obj instanceof User) {
        return GraphQLUser;
      }
      console.error(
        chalk.red(
          `Error: node ID has been resolved into an object successfully, but we don't know its graphqlType`
        )
      );
      return null;
    }
  );
  
  const GraphQLTodo = new GraphQLObjectType({
    name: 'Todo',
    fields: {
      id: globalIdField_unibet('Todo'),
      text: {
        type: GraphQLString,
        resolve: obj => obj.text,
      },
      completed: {
        type: GraphQLBoolean,
        resolve: obj => obj.completed,
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
    connectionType: TodosConnection,
    edgeType: GraphQLTodoEdge,
  } = connectionDefinitions({
    name: 'Todo',
    nodeType: GraphQLTodo,
  });
  
  const GraphQLUser = new GraphQLObjectType({
    name: 'User',
    fields: {
      id: globalIdField_unibet('User'),
      todos: {
        type: TodosConnection,
        args: {
          status: {
            type: GraphQLString,
            defaultValue: 'any',
          },
          ...connectionArgs,
        },
        resolve: async (obj, { status, _, ...args }) => {
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
  

  module.exports ={
      GraphQLTodo,
      GraphQLUser,
  }
  