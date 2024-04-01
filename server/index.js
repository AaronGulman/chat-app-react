const express = require('express');
const socketio = require('socket.io');
const http = require('http');


const PORT = process.env.PORT || 4000;

const router = require('./router') ;


const app = express();
const server = http.createServer(app);
const io = socketio(server);
const path = require('path');


app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

io.on('connection', (socket)=>{
    console.log('new connection')

    socket.on("join", ({name , room}, callback)=>{
        console.log(name,room)


    })

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
