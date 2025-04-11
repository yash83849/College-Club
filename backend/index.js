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