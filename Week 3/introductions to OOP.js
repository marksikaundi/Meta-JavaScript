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




