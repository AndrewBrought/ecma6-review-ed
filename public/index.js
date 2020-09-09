//ES6 Javascript Tutorial For Beginners | ES6 Crash Course
// https://www.youtube.com/watch?v=WZQc7RUAg18
// OLD JAVASCRIPT

var names = ["Ed", "John", "Mike"];

// global variable
var counter = 10;

counter = 5;

console.log(counter) // this will be 5

//We could re-declare a variable like this:
 var counter = 5; // The fact that we can do this is a problem resetting the whole variable can lead to lots of issues
// breaking previously established code

function sayName() {
    var name = 'Ed';
    console.log(name); // will be Ed
}
//and if we call the function, we will also get back 'Ed'
sayName();

//BUT, if we try to access the variable name outside of the function, it does not exist...it's block scoped

//ES6

// This cannot be redeclared or modified...in other words, the european computer manufacturers association "fixed the glitch"
const todoList = ['Milk', 'Cow'];

todoList = ["Milk"]; //this Will not work, error: TypeError: Assignment to constant variable

// this works very similar to var, it allows a variable to be reassigned, generally, we should use const way more than let
let counter = 10;

counter = 5;

//However, you cannot redeclare a let variable like with var, it provides a SyntaxError: Identifier 'counter' has already been declared
let counter = 2;

const list =[1,2,3,4,5];

for(let i = 0; i < list.length; i++) {
    console.log(i);
}
//the let is block scoped and not available outside of the loop (curly braces)


//Concatenation
//OLD JAVASCRIPT
var name = "Ed";

console.log("Hello my name is " + name);

// ES6

const name = 'Ed';
const age = 25;
//String concatenation with backticks
console.log(`Hello my name is ${name} and my age is ${age}`);

// Object Literal(s)
//OLD JAVASCRIPT

function getBook(title, author) {
    return {
        title: title,
        author: author
    };
}

var book = getBook("Harry Potter", "JK");
console.log(book);

// ES6
//We don't need to repeat ourselves, but helpful to know that in this shorthanded way you're not just taking in parameters in your object, you're setting the object properties as the parameters
function getBook(title, author) {
    return {
        title,
        author
    };
}

let book = getBook("Harry Potter", "JK");
console.log(book);

//Object deconstruction
//OLD JAVASCRIPT

var user = {
    name: 'Ed',
    age: 25
}

var myName = user.name;
console.log(myName);

//ES6

const list = {
    name: 'Shopping list',
    items: ['Milk', 'Cow']
}

//Deconstruction is much easier in es6 - we call the object {} properties we want from the object of 'list'...this one is huge and very familiar from poking around React. It's easy but important to understand to really make the connection of what you're seeing.
const { name, items } = list;
console.log(name, items);
// Also, once this relationship is established, we can use name and items where ever we want in our code! Pretty cool

//Arrow Functions
//OLD JAVASCRIPT

function sayName() {
    console.log("Hello, my name is Ed");
}

var sayAge = function() {
  console.log("My age is, well, I don't wanna tell you");
};

sayName();
sayAge();

//ES6
//Keeping this to compare the difference
const sayLocation = function() {
    console.log('My location is unknown');
}

const sayLocation = () => {
    console.log('My location is unknown');
}

sayLocation();

//With parameter

const sayLocation = (location) => {
    console.log(`My current location is in ${location}`);
}

//With just one parameter we can get rid of the parenthesis
const sayLocation = location => {
    console.log(`My current location is in ${location}`);
}

sayLocation('Paris');



