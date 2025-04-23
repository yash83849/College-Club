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
const announcementRouter = require('./routers/announcementRouter');
const cors = require('cors');


// middleware

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(express.json());
app.use('/user', UserRouter);
app.use('/club', clubRouter);
app.use('/announcement', announcementRouter);

io.on("connection", (socket) => {
    console.log('A user connected:', socket.id);

    // Handle joining rooms
    socket.on('joinRoom', (room) => {
        // Leave previous rooms
        socket.rooms.forEach(prevRoom => {
            if (prevRoom !== socket.id) {
                socket.leave(prevRoom);
            }
        });
        
        socket.join(room);
        console.log(`User ${socket.id} joined room: ${room}`);
        
        // Notify room about new user
        socket.to(room).emit('userJoined', `A new user has joined ${room}`);
    });

    // Handle sending messages
    socket.on('sendMessage', ({ room, message, sender }) => {
        io.to(room).emit('receiveMessage', {
            message,
            sender,
            timestamp: new Date().toISOString()
        });
        console.log(`Message in ${room} from ${sender}: ${message}`);
    });

    // Handle user typing
    socket.on('typing', ({ room, sender }) => {
        socket.to(room).emit('userTyping', sender);
    });

    // Handle user stop typing
    socket.on('stopTyping', ({ room }) => {
        socket.to(room).emit('userStopTyping');
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
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
