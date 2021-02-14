// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import 'whatwg-fetch'; // polyfill fetch so that you can use fetch with peace in mind;
import { QueryRenderer, graphql } from 'react-relay';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

import { socket } from './socket';
import TodoApp from './components/TodoApp';
import './styles/index.css';
import './styles/base.css';

const mountNode = document.querySelector('#root');

function fetchQuery(operation, variables) {
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

// https://github.com/facebook/relay/issues/1655#issuecomment-306178478
// consumed by ./subscriptions/todo.js #requestSubscription
function subscribeFunction(operation, variables, cacheConfig, observer) {
  const { onCompleted, onError, onNext } = observer;
  socket.on('connect', () => {
    socket.emit('graphql:subscription', {
      query: operation.text,
      variables,
    });
  });
  
  socket.on('graphql:subscription', response => {
    console.log('graphql:subscription received......', response);
    onNext({
      ...response,
      errors: [],
    });
  });
  return { dispose: () => null }; // must return a disposable;
}

const modernEnvironment = new Environment({
  network: Network.create(fetchQuery, subscribeFunction),
  store: new Store(new RecordSource()),
});

ReactDOM.render(
  <QueryRenderer
    environment={modernEnvironment}
    query={graphql`
      # your graphql literal defined here will be compiled by relay-compiler,
      # so make sure query name is defined as module_nameQuery where module_name in this case is client
      # see ./__generated__
      query clientQuery {
        # must be named clientQuery,  client/index.js ==> clientQuery  ;
        viewer {
          user {
            ...TodoApp_viewer # nest a child fragment from 1.  <TodoApp/> ; 2. fragment name "viewer"
          }
        }
      }
    `}
    variables={{}}
    render={({ error, props }) => {
      if (props) {
        return <TodoApp viewer={props.viewer.user} />;
      } else {
        return <div>Loading</div>;
      }
    }}
  />,
  mountNode
);

socket.on('connect', () => {
  console.log('ws connection established!!');
});

['connect_timeout', 'connect_error'].forEach(error_event => {
  socket.on(error_event, error => {
    console.error(
      `ws error: event ${error_event}  error: ${JSON.stringify(error)}`
    );
    //socket.connect(); // by default socket.io will try reconnect;
  });
});
