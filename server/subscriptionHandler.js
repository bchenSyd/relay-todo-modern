import {graphql} from 'graphql';
import {
  graphqlSubscribe,
} from 'graphql-relay-subscription';
import {schema} from '../data/schema';

import events from './events';

//https://github.com/bochen2014/graphql-relay-subscription
const subscribe = async (request, updateCallback) => {
  console.log('subscribe begin...');
  const {query, variables} = request;
  const result = await graphqlSubscribe({
    schema,
    query,
    context: {
      subscript2RabbitMQ: () => {
        console.log(`pubSub.sub('amqp.changes', msg=>{ .....  })`);
        _subscript2RabbitMQ(query, variables, updateCallback);
      },
    },
    variables,
  });
  return result;
};



const _subscript2RabbitMQ = (query, variables, updateCallback) => {
  events.on('amqp.changes', async msg => {
    const {id: localTodoId} = msg;
    const updatedPayload = await graphql(schema, query, {localTodoId}, null, variables);
    updateCallback(updatedPayload);
  });
}

export default {subscribe};