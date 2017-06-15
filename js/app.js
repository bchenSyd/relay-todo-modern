import React from 'react';
import ReactDOM from 'react-dom';

import {
  QueryRenderer,
  graphql,
} from 'react-relay';
import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

import {socket} from './socket';
import TodoApp from './components/TodoApp';

const mountNode = document.getElementById('root');

function fetchQuery(
  operation,
  variables,
) {
  return fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

function subscribeFunction(operation, variables, cacheConfig, observer) {
  //send the subscription query to server;
  socket.emit('graphql:subscription', {
    query:operation.text,
    variables});
  return {dispose: () => null}; // must return a disposable;
}

const modernEnvironment = new Environment({
  network: Network.create(fetchQuery, subscribeFunction),
  store: new Store(new RecordSource()),
});

ReactDOM.render(
  <QueryRenderer
    environment={modernEnvironment}
    query={graphql`
      query appQuery {
        viewer {
          user{
               ...TodoApp_viewer 
            }
        }
      }
    `}
    variables={{}}
    render={({error, props}) => {
      if (props) {
        return <TodoApp viewer={props.viewer.user} />;
      } else {
        return <div>Loading</div>;
      }
    }}
  />,
  mountNode
);

//https://github.com/facebook/relay/issues/1655#issuecomment-306178478
socket.on('connect', () => {
  console.log('ws connection established!!');
});
socket.on('greeting', response => {
  console.log(response);
});