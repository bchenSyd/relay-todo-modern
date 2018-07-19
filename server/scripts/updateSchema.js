const fs = require('fs');
const path = require('path');
const { schema } = require('../data/schema');
const { printSchema } = require('graphql');

// we don't need 'schema.json' file anymore in relay-modern
// (async () => {
//   const result = await (graphql(schema, introspectionQuery));
//   if (result.errors) {
//     console.error(
//       'ERROR introspecting schema: ',
//       JSON.stringify(result.errors, null, 2)
//     );
//   } else {
//     console.log('************** update schema  ********************')
//     fs.writeFileSync(
//       path.join(__dirname, '../data/schema.json'),
//       JSON.stringify(result, null, 2)
//     );
//   }
// })();

// used to feed relay-compiler
const schemaPath = path.resolve(__dirname, '../data/schema.graphql');

fs.writeFileSync(schemaPath, printSchema(schema));

console.log('************** update schema  ********************');
