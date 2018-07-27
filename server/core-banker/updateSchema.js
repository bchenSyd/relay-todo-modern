const fs = require("fs");
const path = require("path");
const { schema } = require("./schema");
const { printSchema } = require("graphql");

fs.writeFileSync(
  path.resolve(__dirname, "./schema.graphql"),
  printSchema(schema)
);
