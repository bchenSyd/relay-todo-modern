const redis = require('redis');
const bluebird = require('bluebird');
bluebird.promisifyAll(redis);

module.exports = redis;
