'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eventemitter = require('eventemitter2');

var events = new _eventemitter.EventEmitter2({
  wildcard: true,
  maxListeners: 500 // yolo
});
exports.default = events;
//# sourceMappingURL=events.js.map