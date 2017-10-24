// @flow

import io from 'socket.io-client';
const __DEV__ = process.env.NODE_ENV !== 'production'; //eslint-disable-line
const socket = __DEV__ ? io('http://localhost:8081') : io();

export {socket};