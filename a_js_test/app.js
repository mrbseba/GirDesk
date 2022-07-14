//test 1
var life = 100;
life = life - 10;

var name = 'Seba';
var checkout = false;
const n = 1000;
let i = 10;


if(checkout == true){
    console.log("It's corect");
}else{
    console.log("You have to work muck more");
}

const s_name = "Seba";

function logger(s_name){
    
    console.log("Party Time");
    console.log("Party Time");
    console.log("Party Time");
    console.log("Party Time");
    console.log(s_name);
}
logger(s_name);

function adder(num1, num2){
    console.log( num1 + num2);
}
adder(10, 20);

function toUpper(text){
    const upperCased = text.toUpperCase();
    console.log("This is a uppercase " + upperCased);
}

toUpper(s_name);


const theBiggest = () =>{
    
}
console.log("hi");
console.log("This is life: " + life + " minus 10");
console.log("This is const: " + n);
console.log("This is let: " + i);