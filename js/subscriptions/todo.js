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
    variables:arg,
    onComplete: () => { /* need this if payload doesn't contain an id field*/},
    onError: error => console.error(error),
  })
}

export default {subscribeTodo};