const { nodeDefinitions } = require('graphql-relay');
const { fromGlobalId_unibet } = require('../unibetIds');
const { getTodo, getViewer } = require('../../database');

/*"Abstract type Node must resolve to an Object type at runtime for field "Query.node" with value [object Object], 
received [object Object]. Either the Node type should provide a "resolveType" 
function or each possible types should provide an "isTypeOf" function.",
*/
// https://facebook.github.io/relay/graphql/objectidentification.htm
// this is a relay feature, not graphql
const { nodeInterface, nodeField } = nodeDefinitions(
  async globalId => {
    // idFetcher;
    const { type, id } = fromGlobalId_unibet(globalId);
    switch (type) {
      case 'Todo': {
        const todo = await getTodo(id);
        return { ...todo, __type: type };
      }
      case 'User':
        return { ...getViewer(id), __type: type };
      default:
        throw new Error(
          `Client has submitted a node id which can't be resolved to an object`
        );
    }
  },
  obj => {
    if (typeof obj !== 'object' || !obj.__type) {
      throw new Error('node query should be resolved to an object first');
    }
    const { __type } = obj;
    delete obj[__type]; // __type is we added before; meant to be transient;
    // type resolver
    switch (__type) {
      case 'Todo':
        return require('./todo').GraphQLTodo; //==================================================> dynamic require is the KEY!!
      case 'User':
        return require('./user').GraphQLUser; // =======>  otherwise there is a cycle dependency between './nodeInterface.js' and './todo.js'
      // ending up with nodeInterface undefined in './todo.js'
      default:
        throw new Error('internal error: unrecoginzed __type');
    }
  }
);

module.exports = {
  nodeInterface,
  nodeField,
};
