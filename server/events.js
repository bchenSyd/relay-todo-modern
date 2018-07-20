// @flow
const { EventEmitter } = require('events');

const events = new EventEmitter();

// WRONG
// exports.default = events;

// CORRECT
module.exports = events;
