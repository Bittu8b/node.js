var os = require('os');


var totalM = os.totalmem();
var freeM = os.freemem();

console.log(totalM);
console.log(freeM);
