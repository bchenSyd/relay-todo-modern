import io from 'socket.io-client';
//only one instance of socket;
const socket = __WS_SERVER__ === 'azure' ? io() : io(__WS_SERVER__);

export {socket};