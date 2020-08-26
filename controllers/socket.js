
const connFunctions = [];

connFunctions.checkMessages = (io,namespace) => {
    io.of(namespace).on('connection', (socket, req)=> {

        socket.emit("messageFromServer",{text:"Connected to the "+namespace+" channel"})
    
        socket.on('newMessageToServer', (message) => {
            io.of(namespace).emit("newMessageFromServer",{text:message.text})
        })

        socket.join('level1')
        socket.to('level1').emit('joined', `${socket.id} has joined the Level1 room`)
    })    
}

exports.checkSockets= (io) => {

    connFunctions.checkMessages(io,'/');
    // connFunctions.checkMessages(io,'/admin'); 

}
