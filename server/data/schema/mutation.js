
const GraphQLAddTodoMutation = mutationWithClientMutationId({
    name: 'AddTodo',
    inputFields: {
      text: { type: new GraphQLNonNull(GraphQLString) },
    },
    outputFields: {
      todoEdge: {
        type: GraphQLTodoEdge,
        resolve: async ({ localTodoId }) => {
          debugger;
          const todos = await getTodos();
          const todo = todos.find(t => t.id === localTodoId);
          return {
            cursor: cursorForObjectInConnection(todos, todo),
            node: todo,
          };
        },
      },
      viewer: {
        type: GraphQLUser,
        resolve: () => getViewer(),
      },
    },
    mutateAndGetPayload: async ({ text }) => {
      debugger;
      const localTodoId = await addTodo(text);
      return { localTodoId };
    },
  });
  
  const GraphQLChangeTodoStatusMutation = mutationWithClientMutationId({
    name: 'ChangeTodoStatus',
    inputFields: {
      completed: { type: new GraphQLNonNull(GraphQLBoolean) },
      id: { type: new GraphQLNonNull(GraphQLID) },
    },
    outputFields: {
      todo: {
        type: GraphQLTodo,
        resolve: async ({ localTodoId }) => {
          const todo = await getTodo(localTodoId);
          return todo;
        },
      },
      viewer: {
        type: GraphQLUser,
        resolve: () => getViewer(),
      },
    },
    mutateAndGetPayload: async ({ id, completed }) => {
      const localTodoId = fromGlobalId_unibet(id).id;
      await changeTodoStatus(localTodoId, completed);
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
      const deletedTodoIds = deletedTodoLocalIds.map(
        toGlobalId.bind(null, 'Todo')
      );
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

  module.exports = Mutation;