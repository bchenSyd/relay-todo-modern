const { GraphQLNonNull, GraphQLID } = require('graphql');

const fromGlobalId_unibet = globalId => {
  const index = globalId.indexOf(':');
  return {
    id: globalId.slice(index + 1, globalId.length),
    type: globalId.slice(0, index),
  };
};
const globalIdField_unibet = (typeName /*'User', 'Todo'..etc*/, idFetcher) => ({
  name: 'id',
  description: 'The ID of an object',
  type: new GraphQLNonNull(GraphQLID),
  resolve: function resolve(obj, args, context, info) {
    return `${typeName}:${obj.id}`;
  },
});

module.exports = {
  fromGlobalId_unibet,
  globalIdField_unibet,
};
