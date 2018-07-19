const { GraphQLNonNull, GraphQLID } = require('graphql');

const fromGlobalId_unibet = globalId => {
  const tmp = globalId.split(':');
  return {
    id: tmp[1],
    type: tmp[0],
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
