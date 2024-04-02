const express = require('express');
const socketio = require('socket.io');
const http = require('http');


const { addUser, removeUser , getUser , getUsersInRoom} = require ('./users.js');


const PORT = process.env.PORT || 4000;

const router = require('./router') ;


const app = express();
const server = http.createServer(app);
const io = socketio(server);
const path = require('path');


app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

io.on('connection', (socket)=>{
    socket.on("join", ({name , room}, callback)=>{
        const { error, user } = addUser({id: socket.id,name,room});

        if(error) return callback(error);

        socket.emit('message', {user: "admin", text: `${user.name}, welcome to the room ${user.room}`});
        socket.broadcast.to(user.room).emit('message', {user: "admin", text: `${user.name} has joined the chat`})

        socket.join(user.room);

        callback();

    });

    socket.on('sendMessage',(message,callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name , text: message})

        callback();
    });

    socket.on('disconnect',()=>{
        console.log('user left')
    });
})

app.use(router)

server.listen(PORT,() => console.log(`SERVER IS RUNNING ON PORT ${PORT}`))





// const path = require('path');


// app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
// });

// Your existing server setup code...
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
