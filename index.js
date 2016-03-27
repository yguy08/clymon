var app        = require('express')();
var express    = require('express');
var http       = require('http').Server(app);
var io         = require('socket.io')(http);
var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/public"));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(bodyParser.json());

app.get('/public', function(req,res){

console.log("I received a GET request");

});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(5000, function(){
  console.log("Server running on port 5000");
});

//local host
/*http.listen(3000, function(){
  console.log("Server running on port 3000");
});*/
