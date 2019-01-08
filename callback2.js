const fs = require('fs');

fs.readdir('./',function(err,res){
    if(err){
        console.log("errror",err);
        
    }else{
        console.log('Result : ',res);
        
    }

});