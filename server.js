'use strict';

const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

  const fetch = require('node-fetch');

  let url = "https://api.github.com/users/github";
  
  let settings = { method: "Get" };
  let res = '';
  fetch(url, settings)
      .then(res => res.json())
      .then((json) => {
         res = JSON.stringify(json);
      });

      
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');

  io.on('test_emit_method', function (params) {
  //  io.emit('test_emit_method', params)
    console.log('Client emited');
  })
  


  socket.on('disconnect', () => console.log('Client disconnected'));
    socket.on('test_emit_method', () =>
    io.emit('test_emit_method', res),
  //  console.log('test_emit_method test_emit_method')
     );



});
//io.emit('time', new Date().toTimeString())
 setInterval(() => io.emit('time', res), 1000);

