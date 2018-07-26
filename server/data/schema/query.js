const something = require('./aljfls');


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

  module.exports= Query;