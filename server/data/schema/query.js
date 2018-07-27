const { GraphQLObjectType } = require('graphql');

const { GraphQLUser, nodeField } = require('./types');
const { getViewer } = require('../database');

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    viewer: {
      type: new GraphQLObjectType({
        name: 'Viewer', // this will trigger viewerhandler
        fields: {
          user: {
            type: GraphQLUser,
            // https://graphql.org/learn/execution/#root-fields-resolvers
            resolve: (
              obj, // the previous object, which for a field on the root Query type is often not used;
              args, // args provided to the filed in query
              context, // available to every resolver
              info // a value which holds field-specific information relevant to the current query as well as schema details
            ) => getViewer(),
          },
        },
      }),
      resolve: () => ({}),
    },
    node: nodeField,
  },
});

module.exports = Query;
