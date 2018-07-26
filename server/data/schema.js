const {GraphQLSchema} =require('graphql');
const Query = require('./schema/query');
const Mutation = require('./schema/mutation');
const Subscription = require('./schema/subcription');

exports.schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
  subscription: Subscription,
});
