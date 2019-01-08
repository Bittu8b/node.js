var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('someevent',function(msg) {
  console.log('events fired with : '+ msg);
});

myEmitter.emit('someevent','saubhik');
