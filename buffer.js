var buffer = new Buffer.alloc(30);

var len = buffer.write('Hi this is saubhik');
var buffer2 = new Buffer.alloc(20);
buffer2.write('Saheb ji');
console.log(buffer.len);

console.log(len);
console.log(buffer.toString());

var json = buffer.toJSON();

//console.log(json);

var b = Buffer.concat([buffer2,buffer]);
console.log(b.toString());

for(var i=0;i<10;i++){
  console.log(2*i);
  //console.log('\n');
}
