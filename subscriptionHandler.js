import {
  graphqlSubscribe,
} from 'graphql-relay-subscription';
import {schema} from './data/schema';

const subscribe = async request => {
  debugger;
  console.log('subscribe begin...');
  const {query, variables} = request;
  const result = await graphqlSubscribe({
    schema,
    query,
    context: {
      subscript2RabbitMQ: () => {
        console.log('pubSub.sub(\'amqp.races\', msg=>{ .....  })');
      },
    },
    variables,
  });
  return result;
};

export default {subscribe};