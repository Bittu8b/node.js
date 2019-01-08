var express = require('express');
var app = express();

app.use(function(req,res,next){
    console.log('Time : '+ Date());
    next();
})

app.use(function(err,req,res,next){
    if(err){
        res.send('Something broke');
    }
})

app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
 })

 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })