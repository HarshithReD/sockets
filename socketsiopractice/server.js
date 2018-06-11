var http = require('http');
var fs = require('fs');
const express=require('express');
var app=express();
var hbs=require('hbs');
app.set('view engine','hbs');

var server = http.createServer(app);
app.get('/',(req,res)=>{
	res.render('index.hbs');
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
	
    console.log('A client is connected!');
	socket.on('send',function(data){
		io.emit('message',{message:data.message});
	});
});


server.listen(8080);