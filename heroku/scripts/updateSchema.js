'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _schema = require('../data/schema');

var _graphql = require('graphql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var schemaPath = _path2.default.resolve(__dirname, '../data/schema.graphql');

_fs2.default.writeFileSync(schemaPath, (0, _graphql.printSchema)(_schema.schema));

console.log('************** update schema  ********************');
//# sourceMappingURL=updateSchema.js.map