import io from 'socket.io-client';
//only one instance of socket;
const socket = __WSENV__ === 'azure' ? io() : io(__WSENV__);

export {socket};