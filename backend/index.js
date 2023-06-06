const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: 'http://localhost:3001',
  methods: ['GET', 'POST'],
});
io.on('connection', (socket) => {
  socket.on('send_message', (data) => {
    socket.broadcast.emit('receive', data);
    
  });
});
server.listen(3001, () => {
  console.log('SERVER is running');
});
