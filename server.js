var http = require('http');

http.createServer(function(request,response) {
  if(request.url == '/'){
    response.write('Welcom to homepage');
    response.end();
  }else if(request.url == '/user_list'){
    response.write('List generated');
    response.end();
  }else{
    response.write('404 not found');
    response.end();
  }
}).listen(8081);

console.log('server running');
