import fs from 'fs';
import path from 'path';
import { schema } from '../data/schema';
import { printSchema } from 'graphql';

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

const schemaPath = path.resolve(__dirname, '../data/schema.graphql');

fs.writeFileSync(schemaPath, printSchema(schema));

console.log('************** update schema  ********************')
 