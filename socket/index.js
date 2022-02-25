import { Server } from "socket.io";

const PORT = 9000;

//makes connection
const io = new Server(PORT, {
    cors: {
        origin: 'http://localhost:3000'
    }
})

let users = [];

const addUser = (userId, socketId) =>{
    //if user doest exist already in array than push it in 
    !users.some(user => user.userId === userId) && users.push({ userId, socketId})
}

const getUsers = (userId) =>{
    return users.find(user => user.userId === userId)
}

const removeUser = (socketId) => {
    users = users.filter(user=> user.socketId !== socketId)
}
//using io connection
io.on('connection', (socket) => {
    console.log('User connected')

    //connect
    socket.on('addUser', userId =>{
        addUser(userId, socket.id)
        io.emit('getUsers',users)
    })

    //send messages
    socket.on('sendMessage', ({ senderId, receiverId, text }) =>{
        const user = getUsers(receiverId)
        
        io.to(user.socketId).emit('getMessage', {
            senderId, text
        })

    })

    //disconnect
    socket.on('disconnect', ()=> {
        console.log('user Disconnected');
        removeUser(socket.id)
        io.emit('getUsers', users)
    })
})