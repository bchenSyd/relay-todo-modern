'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.globalIdField_unibet = exports.fromGlobalId_unibet = undefined;

var _graphql = require('graphql');

var fromGlobalId_unibet = function fromGlobalId_unibet(globalId) {
    var tmp = globalId.split(':');
    return {
        id: tmp[1],
        type: tmp[0]
    };
};
var globalIdField_unibet = function globalIdField_unibet(typeName /*'User', 'Todo'..etc*/, idFetcher) {
    return {
        name: 'id',
        description: 'The ID of an object',
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
        resolve: function resolve(obj, args, context, info) {
            return typeName + ':' + obj.id;
        }
    };
};

exports.fromGlobalId_unibet = fromGlobalId_unibet;
exports.globalIdField_unibet = globalIdField_unibet;
//# sourceMappingURL=unibetIds.js.map