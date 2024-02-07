const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: ['http://localhost:3000'],
        credentials: true
    }
});
const port = process.env.PORT || 4000;

io.on('connection', (socket) => {

    socket.on('disconnect', () => {

    });

})
app.get('/', (req, res) => {
    res.send('v1.0.4');
})
server.listen(port, () => {
    console.log('server running on port:  ' + port);
});