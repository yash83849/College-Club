// importing express
const express = require('express');
// create an express app
const app = express();
const port = 5000;

const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*'
    }
});

const UserRouter = require('./routers/userRouter');
const clubRouter = require('./routers/clubRouter');
const cors = require('cors');


// middleware

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(express.json());
app.use('/user', UserRouter);
app.use('/club', clubRouter);

io.on("connection", (socket) => {
    
    // Socket.IO logic
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Join a specific room
    socket.on('joinRoom', (room) => {
        socket.join(room);
        console.log(`User ${socket.id} joined room: ${room}`);
    });

    // Handle sending messages to a specific room
    socket.on('sendMessage', ({ room, message, sender }) => {
        io.to(room).emit('receiveMessage', { message, sender });
        console.log(`Message sent to room ${room}:`, message);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });
});
  });

// routes or endpoints
app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('response from add');
});

// getall
// delete

// starting the server
httpServer.listen(port, () => {
    console.log('Server started');
});
