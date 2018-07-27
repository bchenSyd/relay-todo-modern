const { nodeDefinitions, fromGlobalId } = require("graphql-relay");

const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);
    if (type === "Opportunity") {
      //todo: getOpportunityById;
      return {
        id,
        __type: type,
        name: "opportunity " + id
      };
    } else if (type === "Lead") {
      // todo: get lead
    }
  },
  obj => {
    if (typeof obj !== "object" || !obj.__type) {
      throw new Error("not query should resolve to an object");
    }
    // __type is auxiliary filed;
    const { __type } = obj;
    delete obj[__type];

    switch (__type) {
      case "Opportunity": {
        return require("./opportunity");
      }
      case "Lead":
        return require("./lead");  //=================================> dynamic require is the key ! otherwise there will be a cycle dependency and nodeInterface will be undefined in opportunity.js
      case "Customer":
        return require("./customer");
      case "Employee":
        return require("./employee");
      default:
        throw new Error(
          `internal error: it's likely that you didn't map graphqlType correctly`
        );
    }
  }
);

module.exports = {
  nodeInterface,
  nodeField
};
