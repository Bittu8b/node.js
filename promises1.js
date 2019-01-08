var link = 'https://api.myjson.com/bins/15b2zs';

fetch(link).then((data)=>{
    console.log(data);
    
}).catch((err)=>{
    console.log(err);
    
})