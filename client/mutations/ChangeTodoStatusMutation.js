// @flow

import { commitMutation, graphql } from 'react-relay';

const mutation = graphql`
  mutation ChangeTodoStatusMutation($input: ChangeTodoStatusInput!) {
    changeTodoStatus(input: $input) {
      todo {
        id
        completed
      }
      viewer {
        id
        completedCount
      }
    }
  }
`;

function getOptimisticResponse(completed, todo, user) {
  const viewerPayload = { id: user.id };
  if (user.completedCount != null) {
    viewerPayload.completedCount = complete
      ? user.completedCount + 1
      : user.completedCount - 1;
  }
  return {
    changeTodoStatus: {
      todo: {
        completed: completed,
        id: todo.id,
      },
      viewer: viewerPayload,
    },
  };
}

function commit(environment, completed, todo, user) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: { completed, id: todo.id },
    },
    optimisticResponse: getOptimisticResponse(completed, todo, user),
  });
}

export default { commit };
