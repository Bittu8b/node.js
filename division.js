var readline = require('readline-sync');
var events = require('events');

var n = readline.question("Enter numerator : ");
var d = readline.question("Enter denominator : ");

var e = new events.EventEmitter();

e.on('divide_zero',zeroHandler);




var divide = function (numerator , denominator) {
  if(denominator == 0){
    e.emit('divide_zero');
    return;
  }

  var res = numerator/denominator;
  console.log('Result is : '+res);
}

function zeroHandler() {
  console.log('Can not divide by zero');

}

divide(n,d);
