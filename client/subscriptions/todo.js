// @flow
import {
  requestSubscription,
  graphql,
} from 'react-relay';
import {ConnectionHandler} from 'relay-runtime';


const subscription = graphql`
  #relay-compiler: FindGraphQLTags: Operation names in graphql tags must be 
  #prefixed with the module name and end in "Mutation", "Query", or "Subscription". 
  #Got 'TodoblablaSubscription' in module 'TodoSubscription' (file name).
  subscription todoSubscription($input: TodoSubScriptionInput!){
      todoSubScription(input: $input){
         clientSubscriptionId
         arg
         todo{
           id,
           text,
           complete
         }
      }
  }`;

const subscribeTodo = (environment, arg) => {
  /**
   * D:\relay-muckaround\packages\relay-runtime\store\RelayModernEnvironment.js #sendSubscription
    *RelayModernEnvironment#sendSubscription({
      onCompleted,
      onNext,
      onError,
      operation,
      updater,
    }: {
      onCompleted?: ?(errors: ?Array<PayloadError>) => void,
      onNext?: ?(payload: RelayResponsePayload) => void,
      onError?: ?(error: Error) => void,
      operation: OperationSelector,
      updater?: ?SelectorStoreUpdater,
    }): Disposable
   */
  requestSubscription(environment, {
    subscription,
    variables: arg,
    // after socket has been closed successfully
    onCompleted: () => {alert('done!');/* need this if payload doesn't contain an id field*/},
    // connection_err ..etc
    onError: error => console.error(error),
    //end of pipe line; after store merged
    onNext: response => {},
    // begin of pipe line; before store merged
    updater: (store /*RelayRecordSourceSelectorProxy*/, data /*selector data, raw json*/) => {
      //@see: D:\relay-muckaround\packages\relay-runtime\store\RelayPublishQueue.js
      /**
       'RelayRecordSourceSelectorProxy.getResponse: This call is deprecated. ' +
        'If you need need to access data from a mutation response, you ' +
        'should use the mutation fragment data passed in as a second ' +
        'argument to the mutation updater.'
       */
    }
  });
};

export default {subscribeTodo};