var events = require('events');

var e = new events.EventEmitter();

var connectionHandler = function(){
  console.log('connection created');

  e.emit('recieve_data');
}

var recieve_data = function () {
  console.log('data recieved successfully');
}



e.on('connection',connectionHandler);
e.on('recieve_data',recieve_data);

e.emit('connection');

console.log('program ended');
