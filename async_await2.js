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

async function main(){
    obj['data1 '] = await doA();
    obj['data2 '] = await doB();

    console.log(obj);
    
}

main();


