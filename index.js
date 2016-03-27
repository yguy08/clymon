var app        = require('express')();
var express    = require('express');
var http       = require('http').Server(app);
var io         = require('socket.io')(http);
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));

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

http.listen(app.get('port'), function() {
  console.log('Running on port', app.get('port'));
});
