var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));


console.log("My socket server is running");

var socket = require('socket.io');

//input output object
var io = socket(server);

//go into that object to sockets and call method on
io.sockets.on('connection', newConnection);

function newConnection(socket) {
	console.log('New Connection: ' + socket.id);

	socket.on('mouse', mouseMsg);

	function mouseMsg(data) {
		socket.broadcast.emit('mouse', data);
		console.log(data);
	}
	// console.log(socket);
}