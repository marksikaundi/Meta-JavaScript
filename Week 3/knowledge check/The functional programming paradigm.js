function getTotal(a, b) {
  return a + b;
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);

//When writing FP code, we keep data and functionality separate and pass data into functions only when we want something computed.

function getDistance(mph, h) {
  return mph * h;
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

//In functional programming, functions return new values and then use those values somewhere else in the code.

function getDistance(mph, h) {
  return mph * h;
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!

///Another style is object-oriented programming (OOP). In this style, we group data and functionality as properties and methods inside objects.

//For example, if I have a virtualPet object, I can give it a sleepy property and a nap() method:
var virtualPet = {
  sleepy: true,
  nap: function () {},
};

//In OOP, methods update properties stored in the object instead of generating new return values.

//For example, if I check the sleepy property on the virtualPet object, I can confirm that it's set to true.

//However, once I've ran the nap() method on the virtualPet object, will the sleepy property's value change?
//creating an object
var virtualPet = {
  sleepy: true,
  nap: function () {
    this.sleepy = false;
  },
};
console.log(virtualPet.sleepy); // true
virtualPet.nap();
console.log(virtualPet.sleepy); // false

In OOP, methods update properties stored in the object instead of generating new return values.

For example, if I check the sleepy property on the virtualPet object, I can confirm that it's set to true.

However, once I've ran the nap() method on the virtualPet object, will the sleepy property's value change?

10
//creating an object
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false
// OOP helps us model real-life objects. It works best when the grouping of properties and data in an object makes logical sense - meaning, the properties and methods "belong together".
//creating an object
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false
// Note that the goal here is not to discuss OOP in depth; instead, I just want to show you the simplest explanation of what it is and how it works, in order to make the single most important distinction between FP and OOP.

// To summarize this point, we can say that the Functional Programming paradigm works by keeping the data and functionality separate. It's counterpart, OOP, works by keeping the data and functionality grouped in meaningful objects.

// There are many more concepts and ideas in functional programming.

// Here are some of the most important ones:

// First-class functions

// Higher-order function

// Pure functions and side-effects

// There are many other concepts and priciples in functional programming, but for now, let's stick to these three.

// First-class functions
// It is often said that functions in JavaScript are “first-class citizens”. What does that mean?

// It means that a function in JavaScript is just another value that we can:

// pass to other functions

// save in a variable

// return from other functions

// In other words, a function in JavaScript is just a value - from this vantage point, almost no different then a string or a number.

// For example, in JavaScript, it's perfectly normal to pass a function invocation to another function.

// To explain how this works, consider the following program.

function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())














