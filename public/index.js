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

//When returning one thing we can simplify the function
const sayLocation = location => console.log(`My current location is in ${location}`);

// How we attach this to an object
//OLD JAVASCRIPT

var user = {
    name: 'Ed',
    age: 25,
    sayName: function() {
        console.log('My name is ' + this.name);
            var that = this;
        var details = function(){
            //In this context 'this' is referring to sayName not user, so name and age will return undefined
            // Apparently it used to be a work around to daisy chain this to that
            console.log("My name is " + that.name + " and my age is " + this.age);
        };
        details();
    }
};

user.sayName(); // 'My name is Ed'

//ES6

const user = {
    name: 'Ed',
    age: 25,
    sayName: function(){
        console.log(`My name is ${this.name}`);
        //In es6 the arrow function 'intuitively' understands 'this' refers to the object that the function is nested in
        const sayDetails = () => {
            console.log(`My name is ${this.name} and ${this.age}`);
        };
        sayDetails();
    }
};

user.sayName();

// practical example where this might be used/seen
button.addEventListener('click', function(){
   var addFade = () => {
     this.style.display = "none";
   };
});


//Default Parameters
//OLD JAVASCRIPT

function multiply(x, y) {
    console.log(x * y);
}

multiply(5, 10) // 50
// problem with this is that if left empty it returns:
multiply() // NaN

// A way to prevent this is
function multiply(x, y) {
    var a = x || 1;
    var b = y || 1;
    console.log(a * b);
}

multiply(); // now this returns 1
//But this is clunky

//ES6

const add = (c = 1, d = 1) => {
  console.log(c + d);
};

add(); // when left empty, this returns 2

//Array Functions
// ES6

const shoppingList = ['Milk', 'Cow', 'Chocolate', 'Eggs', 'Bananas'];

// forEach

shoppingList.forEach(product => {
    console.log(product); // this returns an iterated list of products
});

shoppingList.forEach((product, index) => {
    console.log(`Ths index is ${index} and the product is ${product}`);
});

// Map
// Map allows us to make a copy of the array and modify it

const newlist = shoppingList.map(item => {
   return item + " new";
});
//which can be broken down like this
const newlist = shoppingList.map(item => item + " - new"); // returns new list with the items to be manipulated

console.log(newlist);

// Filter
const filterList = shoppingList.filter(item => item !== "Cow"); // returns items that arent Cow

console.log(filterList);

//Constructor Function and Classes

//OLD JAVASCRIPT

//A constructor is a blueprint that let's us create an object - when we call that function, it creates an object

function Person(name, age, hairColor) {
    this.name = name;
    this.age = age;
    this.hairColor = hairColor;
}

Person.prototype.sayName = function() {
    console.log('my name is ' +  this.name);
}

var Ed = new Person('Ed', '25', 'brown');
console.log(Ed); // returns the complete object of Ed
Ed.sayName(); // returns My name is Ed

function Ed(ocupation, likes, hobbies, name, age, hairColor) {
    Person.call(this, name, age, hairColor);
    this.ocupation = ocupation;
    this.likes = likes;
    this.hobbies = hobbies;
}

//this is how we assign the Person function to Ed
Ed.prototype = Object.create(Person.prototype);

const person = new Ed('Dev', 'nature', 'dancing', 'edwin', '25', 'brown');

person.sayName();

//ES6
// instead of creating a constructor object we can use a class

class shoppingList {
    constructor(items, numItems) {
        this.items = items;
        this.numItems = numItems;
    }
    sayList(){
        console.log(this.items);
    }
}

const myList = new ShoppingList(['Milk, Choco, Redbull'], 3);
console.log(myList); //returns ShoppingList { items: [ 'Milk, Choco, Redbull' ], numItems: 3 }

myList.sayList(); // returns ['Milk, Choco, Redbull']

class Product extends ShoppingList {
    constructor(items, numItems, amount, cost) {
        super(items, numItems);
        this.amount = amount;
        this.cost = cost;
    }
}

const product = new Product(['Redbull, Chocolate, Candy'], 3, 2, 20);

console.log(product);

product.sayList();

//Callbacks
//OLD JAVASCRIPT

console.log('First');
//This will only run when we get back the info
function getData(data, callback) {
    //this is simulating a call
    setTimeout(() => {
        console.log('reading from database')
        callback({ data: data });
    }, 2000);
}

getData(5, function (data) {
    console.log(data);
});

console.log('Last');
// What will actually happen is our return will be:
// First
//Last
//data: 5
//because callbacks don't stall other code in waiting

//ES6

//create a new promise - which is just an operation that's going to finish in the future

const prom = new Promise((resolve, reject) => {
//    Everything in here is asynchronous
    setTimeout(() => {
       resolve({ user: 'Ed', hairColor: 'brown'});
    }, 2000);
});

prom.then(data => {
   console.log(data); //in 2 seconds return { user: Ed, hairColor: brown }
});


