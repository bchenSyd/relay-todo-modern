const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
  } = require('graphql');
  
  
  const { subscriptionWithClientId } = require('graphql-relay-subscription');
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

const GraphqlTodoSubscription = subscriptionWithClientId({
    name: 'TodoSubScription',
    inputFields: () => ({
      arg: { type: GraphQLString },
    }),
    outputFields: () => ({
      arg: { type: GraphQLString }, // useless, just for demo purpose
      todo: {
        //useful!!
        type: GraphQLTodo,
        resolve: async ({ localTodoId }) => {
          if (typeof localTodoId !== 'undefined') {
            return await getTodo(localTodoId);
          }
          return null;
        },
      },
    }),
    //subscription mode;
    subscribe: async ({ arg }, context) => {
      const { subscript2RabbitMQ } = context;
      subscript2RabbitMQ();
      return { localTodoId: undefined, arg };
    },
    //payload mode (event emitter mode)
    getPayload: async ({ localTodoId }, { arg }) => {
      return { localTodoId, arg };
    },
  });
  
  const Subscription = new GraphQLObjectType({
    name: 'Subscription',
    fields: {
      todoSubScription: GraphqlTodoSubscription,
    },
  });

  module.exports = Subscription;