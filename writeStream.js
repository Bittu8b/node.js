var fs = require('fs');

var data = 'Hello this a test case.';

var w = fs.createWriteStream('output.txt');

w.write(data,'utf8');
w.end();

w.on('error',function (err) {
  console.log(err.toString());
});

w.on('finish',function () {
  console.log('Succesfully written on file');
});

console.log('End of program');
