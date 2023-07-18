console.log('everything here is javascript');

var random_variable;
// The default value of the variable we declare is 'undefined', the value will be changed/updated after the initializatin with a value
console.log(random_variable); // 'undefined' will be printed
// If we declare a variable and don't initiailze, the default value of the variable will be undefined

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
// Promises
// Scope
// Closures
// callback function
// event loop
// JS Methods(array methods, string methods, object methods)
// JS events
// ES6
// async JS

/*
"Everything in JS happens inside an Execution Context"
"Call stack maintains the order of execution of execution contexts"

when we run a JS program, an execution context is created
generally a global execution context is created, if required based on the program 
there will be local execution context created and deleted, at the end of program whole global executino context is deleted

when JS is all done with it's work and all program is  run and finished 
the while global execution context also gets deleted.

Execution context is like a box and has 2 components in it, memory and code
memory component/variable environment and code component/thread of execution
memory component contains variable and functions as the key:value; pairs
thread of execution is where the whole code is executed 1 line at a time

JS engine handles everything to manage this execution context creation, deletion and control
It manages it by a stack, which is known as call stack
JS has its own call stack, Call stack is like a stack
and at the bottom of the call stack we have our global execution context
so if new local execution contexts are created they also will be put insdie this stack
and when this local execution context is deleted, it wil be moved out/popped out of call stack and controll will be given back to global execution context
so call stack is basically for managing execution contexts in JS
execution context created - pushed into the call stack
execution context deleted - popped out of the call stack

so after the whole program gets executed GEC gets deleted and will be popped out from the stack
This is the way the whole program in JS engine gets executed

JS is a synchronous single-threaded language
single-threaded means that JS can execute one command at a time
synchronous single-threaded means JS can only execute one command at a time and in a specific order
that is it can only go to the next once the current line has been finished executing
*/

/*
Hoisting in JS
Hoisting in JS is we can access variables and function even before we have initiliazed it
we can basically use the variables and function before declaring it
In JS, the declarations of functions,variables,classes are relocated to the top of the scope, which is calle hoisting in JS
this generally happesn prior to executing the code that is after memory creation phase in the execution context

Generally using hoisting can result in mistakes and not recommended

2 types of hoisting are function hoisting, variable hoisting

((this will be updated)) - check arrow functino hoisting, how it behaves
*/
console.log(k); // undefined will be printed, since in memory creation phase k will have a default of value of undefined
myName(); // Sai Teja Anantha will be printed
console.log(myName); // [Function: myName] will be printed, since in memory creation phase this is the thing JS engine does in the global execution context, we're try to acces prio to the code execution phase 

var k = 7;
function myName() {
    console.log("Sai Teja Anantha");
}

//variable environment is nothing but the memory component in the global executin context
// 'var' scope is function scope, that is, the scope of the variables declared using var keyword is function scope
var x = 7;
firstFunction();
secondFunction();
console.log(x);
function firstFunction(){
    var x = 77;
    console.log(x);
}
function secondFunction(){
    var x = 777; 
    console.log(x);
} // 77 777 7 will be printed because the variable 'x'(declared using var keyword) scope is function scope

/*
What is the shortest JS program?
The shortest JS program is the empty JS file
whenever a JS program is run a global execution context is created(even if the JS file is empty)
and a window is created like a big global object with lots of functions and methods inside it - check this by typing window into the console
these functionalities are given by JS engine
basically, when we run any JS program(even if JS file is empty), global execution context, global object(this is 'window' in the case of browsers) and 'this' variable is created
JS runs at many differnet places whereever it runs there will be a JS engine
for example, in chrome the JS engine is JS V8 engine, in safari, firefox there are other, there have their own engines
at the global level (this === window)
anything outside the function will be in the global space
*/

/*
different between undefined & not defined in JS
console.log(a); // undefined will be printed, by default the value of a is undefined 
var a = 7; 

console.log(x); // x is not defined will be printed, since variable x is not even declared

Here 'undefined' value will be allocated to any declared variable until the variable is initialized with a value and then undefined is replaced by that value
*/

var z;
if (z === undefined)
{
    console.log("z is undefined"); // this will get printed
}
else
{
    console.log("z is not undefined and it is equal to " + z); // this will be printed only if z is initialized with some value
}

// Javascript is a loosely typed language
// we can create a number variable and later put a string or boolean in it, that's why JS is called loosely typed language
var y;
console.log(y); // this will print undefined
y = 7;
console.log(y); // this will print 7
y = "sai";
console.log(y); // this will print sai
// from this example we can see that first a number is given to variable y, then a string, later we can also give it a boolean, that's why JS is called a loosely typed lanague

/*
var a;
a = undefined;
console.log(a); // this will print undefined
but this is not a good practice and it is a mistake
*/
 

/*
Scope means where we can access a specific variable or function in a JS program
1. global scope
2. function scope
3. block scope
lexical environtment, lexical parent and scope chain(will be updated)
(this will be updated)
*/

/*
let and const declarations are Hoisted, but they are hoisted very differently than var declaration
temporal dead zone 

console.log(a); // we get uncaught reference error: cannot access 'a' before initialization
let a = 7; // here temporal dead zone ends 

we cannot redeclare let
let a = 7;
let a = 77; // this will give syntax erros, since we cannot redeclare the same variable using let

we cannot declare now and initialize later in const
const a;
a = 7; // this will give uncaught syntax error: missing initializer in const declaration
Initialization is must when we declare the variable using const
const a = 7; // this is correct

const b = 7;
b = 77; // this give uncaught TypeError: assignment to constant variable
// so we cannot reassigan a value to the variable declared using const keyword

let is more strict thatn var, const is more stricter than let

mostly we will use const and let, var is not used.

the best wasy to avoid temporal dead zone is to put all the declarations and initialization on the top of the program
*/

/*
{} - this is a block in JS program or block is a compound statement 
block scope means what all variables/functions can be accessed inside the block
var can be global/function scope, let and const are block scope
*/

/*
Javascript Closures
Closure is a function bundled together with its lexical environment, function along with its lexical scope forms a closure
setTimeout function

(closure concept will be updated and needs more understanding)
*/

function outerFunction(){
    var p = 7;
    function innerFunction(){
        console.log(p);
    }
    return innerFunction;
}
// outerFunction()(); // this will print 7, this is called closure(this will be eloborated)
var close = outerFunction();
close(); // these 2 lines and outerFunction()();, gives the same result that will print 7

function aFunction(){
    var i = 7;
    setTimeout(function (){
        console.log(i); // first whole JS program will run and after 7000ms/7s '7' will be printed
    }, 7000);
    console.log("Sai Teja Anantha"); // first this will get printed, JS doesn't wait for 15s.
}
aFunction();

// Function statement aka Function Declaration
bFunction(); 
function bFunction(){
    console.log("some string");
}
bFunction();

// Function expression - a function assigned to variable using = is called a function expression
// if you call q(); here we will get - uncaught: typeerror: b is not a function, because q acts as a variable in memory creation phase and has undefined value similar to a variable
var q = function() {
    console.log("what do you think this is");
}
q(); // here the function itself doesn't have a name,if it has a name then it will be called named function expression

// Anonymous Function - they doesn't have their own identity, nothing but a function statement without a name
/*function () {
    this function will give sytanx error: function statements require a function name,
}
*/

// Named Function Expression
var r = function abc(){
    console.log("named function expression");
}
r();
// but if you call abc(); then you will get reference error: abc is not defined
// since xyz is not a function in the outer global scope, created as a local variable to r

// parameters are when you declare a function, arugment are when you pass them instead of paramenters while calling a function

// First Class Functions - the ability to use functions as values, that is we can pass functions as arugment to another function and we can return functions, this ability is knowns as first class functions
// Functions are also called First Class Citizens, the same reason as above

// Arrow Functions - let,const and Arrow functions are introduced from ES6

// What is a callback function in JS
// the function which we pass as an argument to another function is called a callback function

setTimeout(function (){
    console.log("timer");
}, 7000);
 
// blocking the main thread
// power of callbacks?
// deep about eventlisteners
//closures demo with event listeners
// scope demo with even listeners
// garabage collectsions and removeEventListeners



/* function attachEventListeners()
{
    let count = 0;
    document.getElementById("clickMe", count++).addEventListener("click", function xyz(){
    console.log("Button is clicked"); // after clicking button in the browswer, button is clicked will pop up and will count how many times you clicked the button
});

}
attachEventListeners(); */
 
// garbage collection and remove event listeners
// why we do that, event listeners are heavy, that is they takes memory, we remove event listeners when we don't use them, page will take time  to load if we use so many even listeners

/*
 // call stack is insdide the JS engine
 // JS engine is inside the browser

 // browser can make connections to the server and display the data from the server
 // there is timer in browswer

*/

/* Web APIs 
// Browser kind of wraps up all the super power APIs below into a global object(window) and gives access of the window to the call stack/JS engine
setTimeout() 
DOM APIs
fetch()
localStorage
console
location
*/

// fetch() - basically goes and requests a API call from the API's url
// fetch("https://api.netflix.com") (this will be studied more and updated)

console.log("start");
setTimeout(function cb() {
    console.log("callback");
}, 7000);
console.log("end");
// the above code basically is using 2 APIs, 
// those are console, setTimeout()/timer

/* Event Loop and Callback Queue
The event loop checks whethere there is something in callback queue or not and if there is something
it pushes that to the callstack, the event loops runs until the callback queue is empty
// Basically it is the loop of Stack -> Web APIs (SetTimeOut() in above example) -> Event Queue(callback queue) - this cycle is called event loop
*/

// JS Engine
// JS runtime environment is like a big container which contains all the things required to run JS program
// JS runtime environment can contains - JS Engine + APIs + event loop + callback queue + microtask queue + lot of others ( different runtime environments have different of these)
// this runtime environment is not possible without JS engine, JS engine is the heart of JS runtime environment
// Node.js is also JS runtime environment, it can run outside the browser, that is node.js allows js program to run on the server instead of browser

// There are a lot of JS Engines, V8 Engine is used in google chrome browswer, there are different JSengines for different browswers
// google V8 engine is written inside c++
// At presenet google's V8 Engine is fastest JS engine across all the browser
// know more about google v8 engine and update here

// JS Engine Architecture
// code/program -> Parsing -> Compilation -> Execution
// during parsing phase, code is broken down into tokens
// syntax parser, which converts code into AST(Abstract Syntax Tree)
// JS can behave as an interpreted lanuage as well as compiled language
// compilation phase, JIT compilation(just in time compilation)
// execution phase has 2 componenets - memory heap and call stack 
// garbage collector mark&sweep algorithm(read about this and update here)

// Trust issues with setTimeout() - it might take more time to run than we set, if we set 7000ms, it might take more
// why? and know about setTimeout(0) update all about these concepts here

// Functional Programming
// Higher order functions

function a() {
    console.log("hello functionA");
}
function b(a) {
    a();
}
// In this example b is the higher order function, a is the callback function
// study about the functionall programming from akshay saini js vidoes and update here
// map, filer, reduce are highorder function in JS, complete akshay saini last video about this and update here
