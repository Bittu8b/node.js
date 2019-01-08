var fs = require('fs');

var data = '';

//var readerStream = fs.createReaderStream('input.txt');
var readerStream = fs.createReadStream('input.txt');

readerStream.on('data',function (d) {
  data = data+d;

});

readerStream.on('error',function (err) {
  console.log(err.toString());

});

readerStream.on('end',function () {
  console.log(data);

});

console.log('End of program');
