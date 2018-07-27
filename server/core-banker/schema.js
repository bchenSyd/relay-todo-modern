const { GraphQLSchema, GraphQLObjectType, GraphQLList } = require("graphql");
const { GraphqlQLOpportunity, GraphqlQLLead, nodeField } = require("./types");

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    viewer: {
      type: new GraphQLObjectType({
        name: "Viewer",
        fields: {
          opportunities: {
            type: new GraphQLList(GraphqlQLOpportunity),
            resolve: () => {
              debugger;
              return [
                {
                  id: "111",
                  name: "opportunity 1",
                  customers: [
                    {
                      id: "c1",
                      name: "first customer",
                      addresses: ["address1"],
                      emails: ["a@b.com"],
                      phones: ["1122"]
                    }
                  ]
                },
                {
                  id: "222",
                  name: "opportunity 2",
                  customers: [
                    {
                      id: "c2",
                      name: "second customer",
                      addresses: ["address1"],
                      emails: ["a@b.com"],
                      phones: ["1122"]
                    }
                  ]
                }
              ];
            }
          }
        }
      }),
      resolve: () => ({})
    },
    node: nodeField
  }
});

exports.schema = new GraphQLSchema({
  query: Query
});
