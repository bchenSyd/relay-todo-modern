// https://github.com/facebook/relay/issues/1689
declare module 'relay-runtime' {
  // Public API values
  declare var Environment: any;
  declare var Network: any;
  declare var RecordSource: any;
  declare var Store: any;

  declare var areEqualSelectors: any;
  declare var createFragmentSpecResolver: any;
  declare var createOperationSelector: any;
  declare var getDataIDsFromObject: any;
  declare var getFragment: any;
  declare var getOperation: any;
  declare var getSelector: any;
  declare var getSelectorList: any;
  declare var getSelectorsFromObject: any;
  declare var getVariablesFromObject: any;
  declare var graphql: any;

  declare var ConnectionHandler: any;
  declare var ViewerHandler: any;

  declare var commitLocalUpdate: any;
  declare var commitMutation: any;
  declare var fetchQuery: any;
  declare var isRelayStaticEnvironment: any;
  declare var requestSubscription: any;

  // Internal types imported in compiler generated files
  declare type ConcreteFragment = any;
  declare type ConcreteBatch = any;
}