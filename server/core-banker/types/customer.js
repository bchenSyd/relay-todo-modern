const {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require("graphql");

const { globalIdField } = require("graphql-relay");
const { nodeInterface } = require("./nodeInterface");
const GraphQLCustomer = new GraphQLObjectType({
  name: "Customer",
  fields: {
    id: globalIdField("Customer"),

    CIS: {
      type: GraphQLString
    },
    number: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    gender: {
      type: GraphQLString
    },
    dateOfBirth: {
      type: GraphQLBoolean
    },
    age: {
      type: GraphQLInt
    },
    customerSince: {
      type: GraphQLInt
    },
    idVerified: {
      type: GraphQLString
    },
    brandSilo: {
      type: GraphQLString
    },
    addresses: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString))
    },
    emails: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString))
    },
    phones: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString))
    },
    customerCharacteristics: {
      type: new GraphQLList(GraphQLString)
    }
  },
  interfaces: [nodeInterface]
});

module.exports = GraphQLCustomer;
