const {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} =require('graphql');

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
} =require('graphql-relay');

const {
  subscriptionWithClientId,
} =require('graphql-relay-subscription');

const {
  Todo,
  User,
  addTodo,
  changeTodoStatus,
  getTodo,
  getTodos,
  getUser,
  getViewer,
  markAllTodos,
  removeCompletedTodos,
  removeTodo,
  renameTodo,
} =require('./database');

const { globalIdField_unibet, fromGlobalId_unibet } =require('./unibetIds');
const casual =require('casual');

const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId_unibet(globalId);
    if (type === 'Todo') {
      return getTodo(id);
    } else if (type === 'User') {
      return getUser(id);
    }
    return null;
  },
  (obj) => {
    if (obj instanceof Todo) {
      return GraphQLTodo;
    } else if (obj instanceof User) {
      return GraphQLUser;
    }
    return null;
  }
);

const GraphQLTodo = new GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: globalIdField_unibet('Todo'),
    text: {
      type: GraphQLString,
      resolve: (obj) => obj.text,
    },
    complete: {
      type: GraphQLBoolean,
      resolve: (obj) => obj.complete,
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
      resolve: (obj, { status, _, ...args }) =>
        connectionFromArray(getTodos(status), args),
    },
    totalCount: {
      type: GraphQLInt,
      resolve: () => getTodos().length,
    },
    completedCount: {
      type: GraphQLInt,
      resolve: () => getTodos('completed').length,
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

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    viewer: {
      type: new GraphQLObjectType({
        name: 'Viewer', // this will trigger viewerhandler
        fields: {
          user: {
            type: GraphQLUser,
            resolve: () => getViewer(),
          },
        },
      }),
      resolve: () => ({}),
    },
    node: nodeField,
  },
});

const GraphQLAddTodoMutation = mutationWithClientMutationId({
  name: 'AddTodo',
  inputFields: {
    text: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    todoEdge: {
      type: GraphQLTodoEdge,
      resolve: ({ localTodoId }) => {
        const todo = getTodo(localTodoId);
        return {
          cursor: cursorForObjectInConnection(getTodos(), todo),
          node: todo,
        };
      },
    },
    viewer: {
      type: GraphQLUser,
      resolve: () => getViewer(),
    },
  },
  mutateAndGetPayload: ({ text }) => {
    const localTodoId = addTodo(text);
    return { localTodoId };
  },
});

const GraphQLChangeTodoStatusMutation = mutationWithClientMutationId({
  name: 'ChangeTodoStatus',
  inputFields: {
    complete: { type: new GraphQLNonNull(GraphQLBoolean) },
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  outputFields: {
    todo: {
      type: GraphQLTodo,
      resolve: ({ localTodoId }) => getTodo(localTodoId),
    },
    viewer: {
      type: GraphQLUser,
      resolve: () => getViewer(),
    },
  },
  mutateAndGetPayload: ({ id, complete }) => {

    const localTodoId = fromGlobalId_unibet(id).id;
    changeTodoStatus(localTodoId, complete);
    return { localTodoId };
  },
});

const GraphQLMarkAllTodosMutation = mutationWithClientMutationId({
  name: 'MarkAllTodos',
  inputFields: {
    complete: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
  outputFields: {
    changedTodos: {
      type: new GraphQLList(GraphQLTodo),
      resolve: ({ changedTodoLocalIds }) => changedTodoLocalIds.map(getTodo),
    },
    viewer: {
      type: GraphQLUser,
      resolve: () => getViewer(),
    },
  },
  mutateAndGetPayload: ({ complete }) => {
    const changedTodoLocalIds = markAllTodos(complete);
    return { changedTodoLocalIds };
  },
});

// TODO: Support plural deletes
const GraphQLRemoveCompletedTodosMutation = mutationWithClientMutationId({
  name: 'RemoveCompletedTodos',
  outputFields: {
    deletedTodoIds: {
      type: new GraphQLList(GraphQLString),
      resolve: ({ deletedTodoIds }) => deletedTodoIds,
    },
    viewer: {
      type: GraphQLUser,
      resolve: () => getViewer(),
    },
  },
  mutateAndGetPayload: () => {
    const deletedTodoLocalIds = removeCompletedTodos();
    const deletedTodoIds = deletedTodoLocalIds.map(toGlobalId.bind(null, 'Todo'));
    return { deletedTodoIds };
  },
});

const GraphQLRemoveTodoMutation = mutationWithClientMutationId({
  name: 'RemoveTodo',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  outputFields: {
    deletedTodoId: {
      type: GraphQLID,
      resolve: ({ id }) => id,
    },
    viewer: {
      type: GraphQLUser,
      resolve: () => getViewer(),
    },
  },
  mutateAndGetPayload: ({ id }) => {
    const localTodoId = fromGlobalId_unibet(id).id;
    removeTodo(localTodoId);
    return { id };
  },
});

const GraphQLRenameTodoMutation = mutationWithClientMutationId({
  name: 'RenameTodo',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    text: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    todo: {
      type: GraphQLTodo,
      resolve: ({ localTodoId }) => getTodo(localTodoId),
    },
  },
  mutateAndGetPayload: ({ id, text }) => {
    const localTodoId = fromGlobalId_unibet(id).id;
    renameTodo(localTodoId, text);
    return { localTodoId };
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTodo: GraphQLAddTodoMutation,
    changeTodoStatus: GraphQLChangeTodoStatusMutation,
    markAllTodos: GraphQLMarkAllTodosMutation,
    removeCompletedTodos: GraphQLRemoveCompletedTodosMutation,
    removeTodo: GraphQLRemoveTodoMutation,
    renameTodo: GraphQLRenameTodoMutation,
  },
});



const GraphqlTodoSubscription = subscriptionWithClientId({
  name: 'TodoSubScription',
  inputFields: () => ({
    arg: { type: GraphQLString },
  }),
  outputFields: () => ({
    arg: { type: GraphQLString }, // useless, just for demo purpose 
    todo: { //useful!!
      type: GraphQLTodo,
      resolve: ({ localTodoId }) => {
        return typeof localTodoId !== 'undefined' ? getTodo(localTodoId) : null;
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



exports.schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
  subscription: Subscription,
});



