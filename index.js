console.log('everything here is javascript');

/************************ Javascript Basic Syntax **************************/ 

// single line comment
/* double
line comment */
/* 
why js file is linked at the end of body section using script tag?
script element is to link js file to html should be used at the end of
the body section, this is the best practice, becase it will be better if first
content of the web page loads and then the interactivity of the website is applied
otherwise without loading content if js file runs there will be bad user experience
*/

// generally js code executes in browsers
// node allows us to run js code on the server

// variable are used to store the data temporarily in the computer's memory

// before ES6 we used 'var' keyword to declare a variable
// but there are issues with the var keyword(i'll update this)
// from ES6 the best practice is using 'let' keyword to declare a variable
/*
let name; declaring variable
console.log(name); printing value of name without initializing with value
output - undefined
*/
let name = 'sai teja anantha';
console.log(name);
/* 
var/let/const variable_name = value; - declaring and initializing a variable
1. variable name cannot be a reserved keyword like 'if','else','var', etc.
2. it cannot start with a number
3. variable names should be meaningful and descriptive
4. cannot start with a number
5. cannot contain with a space or hyphen(-)
6. variable names are case-sensitive
*/
// camelCase notation is very nice to name variables, like variableName
// we can declare multiple variables on a sinle line, but the best practice is to declare each variable in a new single line

let interestRate = 0.3;
interestRate = 1; // we can change the value of the variable that is declared using let keyword
console.log(interestRate); // the updated value is printed

/*
const interestRate = 0.3;
interestRate = 1; - we can't update/change the value of the variable that is declared using const keyword
console.log(interestRate);
For this code we will get 'TypeError: Assignment to constant variable'
that means a new value cannot be assigned to a variable declared using const keyword
*/

// so If we don't need to re-assign a value, using 'const' keyword should be the default choice, otherwise use 'let' if you need to reassign a value

/*
data types
1. primitive/value types
* string - a sequence of characters, use '' or ""
* number - can be integer or decimal value
* boolean - true or false
* bigint
* undefined - if you declare a variable and did not initialize it, by default the value of that variable will be undefined.
* null 
2. reference types
* object
* array 
* function
*/

/* 
Javascript is dynamically typed language - type of variable can be changed
let name = "sai teja anantha" - here type is string.
let name = 1; - type of variable can change be changed, type is number here.
use 'typeof' operator to check the type of variable in js, typeof(name); will print the type of variable
C++ is staticaly typed language - type of variable cannot be changed
string name = "sai teja anantha"; - type of variable cannot be changed 
*/

// object
let person  = {
    person_name: 'sai teja anantha',
    age: 20 // these are properties of the person object.
};
// dot notation
person.name = 'sai teja';
// bracket notation
person['name'] = 'anantha sai teja'
// dot notation is shorter and better to use, but bracket notation is used in somecases where we don't know which property we are going to use
console.log(person.name);

// Arrays - length, type are dynamic
let selectedColors = ['red', 'blue']; // a list of colors
selectedColors[2] = 1; // types in an array can be different in js
console.log(selectedColors); 
console.log(selectedColors[0]); // red will be printed
console.log(typeof(selectedColors)); // type of an array is an object, technically an array is an object in js
console.log(selectedColors.length) // prints 3
// so properties of object apply to arrays as well, since array is an object

// functions - a set of statements that perform a task/calculates a value
function greet(name_of_the_person_to_greet, nickName) {
    console.log('Hello ' + name_of_the_person_to_greet + ' ' + nickName);
}
greet('sai teja anantha', 'bablu');
greet('anantha sai teja', 'bablu')
greet('sai teja anantha'); // sai teja anantha undefined will be printed, so by default the parameter will be undefined if we don't give any new value/argument
// 'sai teja anantha','anantha sai teja', 'bablu' are arguments to the function, that is the actual value we pass when we call the function in the place of parameter
// name_of_the_person_to_greet, nickName are parameters of the greet function

// function that calculates a value
function square(number) {
    return number*number;
}
square(2);
console.log(square(2));// calculates and prints square of 2

// A real world application is essentially a collection of 100s or 1000s of functions working together to provide functionality of that application

// arithmetic operators
// assignment operators
// comparison operators
// logical operators
// bitwise operators


/******************* Javascript In Depth Advanced Concepts *********************/

// How JS works
// Hoisting
// Scope
// Closures
// callback function
// event loop
// async JS

/*
Everything in JS happens inside an Exeuction Context
Execution context is like a box and has 2 components in it, memory and code
memory component/variable environment and code component/thread of execution
memory component contains variable and functions as the key:value; pairs
thread of execution is where the whole code is executed 1 line at a time
JS is a synchronous single-threaded language
single-threaded means that JS can execute one command at a time
synchronous single-threaded means JS can only execute one command at a time and in a specific order
that is it can only go to the next once the current line has been finished executing
*/


























