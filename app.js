const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);
const config = require('./config');
const mongoose = require('mongoose')


// ``````````````````````````````````````````````````````````````````````````````````````````````````//


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('db url', (msg) => {
        mongoose.connect(msg);
        mongoose.connection.on('open', function (ref) {
            mongoose.connection.db.listCollections().toArray(function (err, names) {
                names.forEach(async (collection)=>{
                    const Task = await mongoose.model(collection.name, schema, collection.name)
                    const d = await Task.find();
                    console.log("Collection:- ", collection);
                    console.log("Documents:- ",d);
                });
            });
        })
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});