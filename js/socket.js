import io from 'socket.io-client';
//only one instance of socket;
const socket = !!__WS_SERVER__ ? io(__WS_SERVER__): io();

export {socket};