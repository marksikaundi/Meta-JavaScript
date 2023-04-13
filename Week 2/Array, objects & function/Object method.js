// Object Methods
// You might already be familiar with objects in JavaScript.

// In this video, you will learn how to design objects as combinations of data and functionality.

// As you might already know, an object consists of key-value pairs, known as properties.

// We can add new key-value pairs to existing objects using the dot notation and the assignment operator. 
var car = {};
car.color = "red"; //update the value of a property of the car objject


//These are known as properties, and can take many data types, including functions.

var car = {};

car.color = "red";

//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function() { 
  console.log('engine running'); 
}

// If the function is a property of an object, it is then referred to as a method. 

// This is a function that can be accessed only through the JavaScript object that it is a member of. For example, the log method, which belongs to the console object, can only be accessed through the console object.

// console.log('Hello world');  

// Let's explore this further now. I will create an object using something known as the constructor function.
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);

// First, I'll build a new object literally named car. I type var, space, car, space, equal sign, space, followed by a set of curly braces, and finally a semicolon.

// Now, I'll extend the car object by assigning it a property named mileage. 

// When I inspect the object, I can confirm that it contains a mileage property set to 98765. 

// I want to add another property to the car object. This time, I will add a property named color and set it to the value of "red".

// I can inspect the object again by typing its name into the browser console. So now, when I type console.log(car), I get an object with two properties: the mileage property, which is set to 98765, and the color property, set to "red". 

// Great, now I've added two properties to my object.

// Next, I want to add a method to my car object. And this method, when called, will output some text to the console. 

// So, once again, I add another property to my car object. After all, a method is just another property of the car object. It's just another key-value par that the car object holds.

// What's unique is that the value I'm assigning to it is a function. 
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
console.log(car);

// So, I begin by typing car dot turnTheKey, equals, and then I type the code for my function. So function, open-close parentheses. Then the two curly braces where I will place my code. Finally, inside the curly braces, I type the console dot log followed by the message "The engine is running".

// Now I can inspect my car object again by typing its name into the console log method. This time, it displays that the car object contains three properties; the color property, the mileage property, and the turnTheKey property. 

// Remember that all the key-value pairs in an object are referred to simply as properties. However, if I want to differentiate between the properties that can be executed, then I refer to such properties as methods. 

// So, now I want to add another method to the car object. I'll name this one lightsOn. 

// Once again, I type car.lightsOn, and then I add an equals sign, and again since it's a method, I'm assigning it to a function. This function will also have a console log in its body, and I'm just logging the string with the text "The lights are on". 
//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()

// Ok, so now I have added four properties to my object. And two of those are methods. 

// I've already ensured that I'm getting the correct mileage and color from my car object. Now, I'll try executing the turnTheKey and the lightsOn methods. 

// First, I'll invoke the turnTheKey method. 

// Remember that this method can be accessed only through the car object, so I first need to type the name of the object that holds the turnTheKey method. In other words, I need to type the word car, followed by a dot, and then the name of my method, which is turnTheKey. 

// Remember that this property is a method. So, to run it, I need to append an opening and a closing parenthesis so that the JavaScript engine can process my JavaScript code. 

// Notice that this results in the "The engine is running" string logged to the console. 

// Now I'll test the other method. Once again, I need to access it through the car object, so I type car.lightsOn, and again, I need to add those parentheses to invoke the lightsOn method. I press the ENTER key and notice the text displays in the console.

// Success! It's important to remember that when the JavaScript engine runs this line of code, it locates the car object in its memory. Then, it finds the lightsOn method on the car object. It reads the function declaration that's saved on this property and runs it, line by line.

// Since there's only a single line of code, the JavaScript engine logs the string "The lights are on" to the console. 












