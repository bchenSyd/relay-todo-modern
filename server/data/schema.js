const Query = require('./schema/query');
const Mutation = require('./schema/mutation');
const Subscription = require('./schema/subscription');

exports.schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
  subscription: Subscription,
});
