
const socket = io('http://localhost:8000')
const socket2 = io('http://localhost:8000/admin')

// socket.on('messageFromServer', (message) => {
//         console.log(message.text)
//         console.log(socket.id)
// })

// document.querySelector('#message-form').addEventListener('submit', (event) => {
//         event.preventDefault()
//         // console.log("Form Submitted")
//         const newMessage = document.querySelector('#user-message').value;    
//         socket.emit('newMessageToServer', {text: newMessage})
// })

// socket.on('newMessageFromServer', (message) => {
//         // console.log(message.text)
//         const messages = document.querySelector('#messages'); 
//         messages.insertAdjacentHTML("beforeend", "<li>"+message.text+"</li>");
// })

const connFunctions = [];

connFunctions.checkMessages = (socket) => {
    socket.on('messageFromServer', (message) => {
            console.log(message.text)
            console.log(`my id is: ${socket.id}`)
    })
        
    document.querySelector('#message-form').addEventListener('submit', (event) => {
            event.preventDefault()
            // console.log("Form Submitted")
            const newMessage = document.querySelector('#user-message').value;    
            socket.emit('newMessageToServer', {text: newMessage})
    })
    
    socket.on('newMessageFromServer', (message) => {
            // console.log(message.text)
            const messages = document.querySelector('#messages'); 
            messages.insertAdjacentHTML("beforeend", "<li>"+message.text+"</li>");
    })

    socket.on('joined', (message) => {
        console.log(message)
    })

}        

connFunctions.checkMessages(socket)