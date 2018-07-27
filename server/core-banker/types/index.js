const GraphqlQLOpportunity = require("./opportunity");
const GraphqlQLLead = require("./lead");
const GraphqlCustomer = require("./customer");
const GraphqlEmployee = require("./employee");
const { nodeInterface, nodeField } = require("./nodeInterface");

module.exports = {
  GraphqlQLOpportunity,
  GraphqlQLLead,
  GraphqlCustomer,
  GraphqlEmployee,
  nodeInterface,
  nodeField
};
