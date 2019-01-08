const EventEmitter = require('events');

const emitter = new EventEmitter();

//Register Listener
emitter.on('loggingRequest',(arg)=>{

    console.log('Log ',arg);
    
});

emitter.emit('loggingRequest',{name:'Saubhik'});