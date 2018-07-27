const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLEnumType,
  GraphQLList
} = require("graphql");

const { globalIdField } = require("graphql-relay");

const GraphQLCustomer = require("./customer");
const GraphQLEmployee = require("./employee");
const { nodeInterface } = require("./nodeInterface");

const GraphQLOpportunity = new GraphQLObjectType({
  name: "Opportunity",
  fields: {
    id: globalIdField("Opportunity"),

    name: {
      type: GraphQLString
    },
    channel: {
      type: GraphQLString
    },
    source: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    productName: {
      type: GraphQLString
    },
    compaignName: {
      type: GraphQLString
    },
    comments: {
      type: GraphQLString
    },
    potentialSalesValue: {
      type: GraphQLString
    },
    handoffStatus: {
      type: new GraphQLEnumType({
        name: "HandoffStatus",
        values: {
          Not_Applicable: {
            value: 0
          },
          Unacknowledged: {
            value: 1
          },
          Acknowledged: {
            value: 2
          }
        }
      })
    },
    createdDate: {
      type: GraphQLString
    },
    referredBy: {
      type: GraphQLString
    },
    referrerBranch: {
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

module.exports = GraphQLOpportunity;
