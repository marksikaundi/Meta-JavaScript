// OOPS practice
class Animal {
  /* ...class code here... */
}

var myDog = Object.create(Animal);

console.log(Animal);

//A more common method of creating obbjects from classes is to use the new  keyword. When using a default or empty constructor method, JavaScript implicitly calls the Object superclass to create the instance.
class Animal {
  /* ...class code here... */
}

var myDog = new Animal();

console.log(Animal);

//Here's an example of an inheritance hierarchy in JavaScript:
class Animal { /* ...class code here... */ }
class Bird extends Animal { /* ...class code here... */ }
class Eagle extends Bird { /* ...class code here... */ }

// OOP Principles: Encapsulation
// In the simplest terms, encapsulation has to do with making a code implementation "hidden" from other users, in the sense that they don't have to know how my code works in order to "consume" the code.

// For example, when I run the following code:
"abc".toUpperCase();


//So, to understand what polymorphism is about, let's consider some real-life objects.

const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

//At this point, one can conclude that the exact same name of the method can have the exact opposite intent, based on what object it is used for.
//Now, to make this code truly polymorphic, I will add another function declaration:
function ringTheBell(thing) {
    console.log(thing.bell())
}

// Now I have declared a ringTheBell() function. It accepts a thing parameter - which I expect to be an object, namely, either the bicycle object or the door object.

// So now, if I call the ringTheBell() function and pass it the bicycle as its single argument, here's the output:
ringTheBell(bicycle); // Ring, ring! Watch out, please!









