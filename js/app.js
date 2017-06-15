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

//https://github.com/facebook/relay/issues/1655#issuecomment-306178478
function subscribeFunction(operation, variables, cacheConfig, observer) {
  const {onCompleted, onError, onNext} = observer;
  socket.emit('graphql:subscription', {
    query: operation.text,
    variables,
  });

  socket.on('graphql:subscription', response => {
    console.log('graphql:subscription received......' + JSON.stringify(response));
    onNext({
      ...response, errors: []
    });
  });

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

socket.on('connect', () => {
  console.log('ws connection established!!');
});
['connect_timeout', 'connect_error'].forEach(error_event => {
  socket.on(error_event, error => {
    console.error(`ws error: event ${error_event}  error: ${JSON.stringify(error)}`);
    //socket.connect(); // by default socket.io will try reconnect;
  });
});