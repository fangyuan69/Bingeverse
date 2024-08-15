// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('video-play', (data) => {
        socket.broadcast.emit('video-update', { time: data.time, play: true });
    });

    socket.on('video-pause', () => {
        socket.broadcast.emit('video-update', { play: false });
    });

    socket.on('video-seek', (data) => {
        socket.broadcast.emit('video-update', { time: data.time });
    });

    socket.on('chat-message', (message) => {
        io.emit('chat-message', message);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
