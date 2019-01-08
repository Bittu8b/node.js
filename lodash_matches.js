var _ = require('lodash');

var arr = [
            {name: 'Saubhik Singh', age : 22},
            {name: 'Arshadd',age: 20},
            {name: 'Bholu' , age: 19}];

var mathces = _.where(arr,{name:'Arshadd'});
console.log(mathces);
