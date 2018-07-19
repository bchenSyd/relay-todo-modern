// @flow
const { EventEmitter2 } = require('eventemitter2');

const events = new EventEmitter2({
  wildcard: true,
  maxListeners: 500, // yolo
});

// WRONG
// exports.default = events;

// CORRECT
module.exports = events;
