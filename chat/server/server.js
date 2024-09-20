const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const cors = require('cors');
const sockets = require('./sockets');
const listen = require('./listen');

// Create the server
const server = http.createServer(app);

// Middleware
app.use(cors());

// Socket setup
sockets(server);

// Start listening on port 3000
listen(server);
