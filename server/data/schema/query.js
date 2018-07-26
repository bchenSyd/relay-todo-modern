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
            resolve: () => getViewer(),
          },
        },
      }),
      resolve: () => ({}),
    },
    node: nodeField,
  },
});

module.exports = Query;
