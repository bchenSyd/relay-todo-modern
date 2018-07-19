// @flow
const { EventEmitter2 } = require('eventemitter2');

const events = new EventEmitter2({
  wildcard: true,
  maxListeners: 500, // yolo
});
exports.default = events;
