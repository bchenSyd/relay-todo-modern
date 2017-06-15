import io from 'socket.io-client';
//only one instance of socket;
export const socket = io('http://localhost:8081');