const fs = require('fs');

var obj = {};

fs.readFile('./input.txt',(err,data)=>{
    if(err) console.log(err);
    else{
        //console.log(data.toString());
        obj['data1'] = data.toString();
    }
    
    
});

fs.readFile('./input2.txt',(err,data)=>{
    if(err) console.log(err);
    else{
        //console.log(data.toString());
        obj['data2'] = data.toString();
    }
    
    
});

//This won't print
console.log(obj);


/*
//This same would print
var obj = {};

fs.readFile('./input.txt',(err,data)=>{
    if(err) console.log(err);
    else{
        //console.log(data.toString());
        obj['data1'] = data.toString();
        fs.readFile('./input2.txt',(err,data)=>{
            if(err) console.log(err);
            else{
                //console.log(data.toString());
                obj['data2'] = data.toString();
                console.log(obj);
            }
            
            
        });
    }
    
    
});*/


