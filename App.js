const express = require('express');
const app = express();
const socketio = require('socket.io');
const socketController = require('./controllers/socket')

app.use(express.static(__dirname + '/public'));


const expressServer = app.listen(8000, () => {
    console.log("server running")
})

const io = socketio(expressServer);
socketController.checkSockets(io);
