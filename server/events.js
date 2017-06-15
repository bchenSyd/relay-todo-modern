import {EventEmitter2} from 'eventemitter2';


const events = new EventEmitter2({
  wildcard: true,
  maxListeners: 500 // yolo
});
export default events;
