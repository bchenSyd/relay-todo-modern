const {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require("graphql");

const { globalIdField } = require("graphql-relay");
const GraphQLCustomer = require("./customer");
const GraphQLEmployee = require("./employee");
const { nodeInterface } = require("./nodeInterface");

const GraphQLLead = new GraphQLObjectType({
  name: "Lead",
  fields: {
    id: globalIdField("Lead"),

    channel: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    campaignName: {
      type: GraphQLBoolean
    },
    comments: {
      type: GraphQLString
    },
    createdDate: {
      type: GraphQLString
    },
    actionByDate: {
      type: GraphQLString
    },
    primaryCustomer: {
      type: GraphQLString
    },
    primaryEmployee: {
      type: GraphQLString
    },
    customers: {
      type: new GraphQLList(GraphQLCustomer)
    },
    employees: {
      type: new GraphQLList(GraphQLEmployee)
    }
  },
  interfaces: [nodeInterface]
});

module.exports = GraphQLLead;
