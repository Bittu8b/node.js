const fs = require('fs');

var obj = {};
function doA(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./input.txt',(err,data)=>{
            if(err) console.log(err);
            else{
                //console.log(data.toString());
                //obj['data2'] = data.toString();
                resolve(data.toString());
            }
            
            
        });
    })
}


function doB(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./input2.txt',(err,data)=>{
            if(err) console.log(err);
            else{
                //console.log(data.toString());
                //obj['data2'] = data.toString();
                resolve(data.toString());
            }
            
            
        });
    })
}

doA().then(function(data){
    obj['data1'] = data;
    doB().then((data2)=>{
        obj['data2'] = data2;
        console.log(obj);
    });
});


