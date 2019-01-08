var readline = require('readline-sync');
class Person {
    //name = '';
    //roll_no = '';
    //section = '';

    /*Person(n,r,s){
        name = n;
        roll_no = r;
        section = s;
    }*/

    print(){
        console.log(`name : Saubhik roll no : 8  section : K1501`);
        
    }




}

var na = readline.question('Enter your name : ');
var ro = readline.question('Enter roll number : ');
var se = readline.question('Enter section : ');

var person = new Person();
person.print();