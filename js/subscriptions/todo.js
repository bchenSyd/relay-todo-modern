import {
  requestSubscription,
  graphql,
} from 'react-relay';

const subscription = graphql`
  #relay-compiler: FindGraphQLTags: Operation names in graphql tags must be 
  #prefixed with the module name and end in "Mutation", "Query", or "Subscription". 
  #Got 'TodoblablaSubscription' in module 'TodoSubscription' (file name).
  subscription todoSubscription($input: TodoSubScriptionInput!){
      todoSubScription(input: $input){
         value
         arg
         clientSubscriptionId
      }
  }`;

const subscribeTodo = (environment, arg) => {
  requestSubscription(environment, {
    subscription,
    variables: arg,
    //a callback function executed when the subscription is closed by the peer without error.
    onCompleted: () => {alert('done!');/* need this if payload doesn't contain an id field*/},
    //a callback function executed when Relay or the server encounters an error processing the subscription.
    onError: error => console.error(error),
  });
};

export default {subscribeTodo};