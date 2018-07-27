const { GraphQLObjectType, GraphQLString } = require("graphql");
const { globalIdField } = require("graphql-relay");
const { nodeInterface } = require("./nodeInterface");

const GraphQLEmployee = new GraphQLObjectType({
  name: "Employee",
  fields: {
    id: globalIdField("Employee"),

    fullName: {
      type: GraphQLString
    },
    number: {
      type: GraphQLString
    }
  },
  interfaces: [nodeInterface]
});

module.exports = GraphQLEmployee;
