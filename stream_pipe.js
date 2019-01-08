var fs = require('fs');

var data = '';

//var readerStream = fs.createReaderStream('input.txt');
var readerStream = fs.createReadStream('input.txt');
var writeStream =  fs.createWriteStream('output.txt');

readerStream.pipe(writeStream);

console.log("end");
