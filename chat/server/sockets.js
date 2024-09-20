const { Server } = require('socket.io');

module.exports = (server) => {
  const io = new Server(server, {
    cors: {
      origin: 'http://localhost:4200',  // Allow the Angular app
      methods: ['GET', 'POST'],
      credentials: true
    }
  });

  // When a client connects
  io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    // Listen for chat messages
    socket.on('chat message', (msg) => {
      console.log('Message received:', msg);

      // Emit the message to all connected clients
      io.emit('chat message', msg);
    });

    // Handle client disconnecting
    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
  });
};
