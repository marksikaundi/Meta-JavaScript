class Cake {
  constructor(lyr) {
    this.layers = lyr + 1;
  }
}

var result = new Cake(1);
console.log(result.layers);
//TASK 1

// class Animal {
//   constructor(lg) {
//     this.legs = lg;
//   }
// }

// class Dog extends Animal {
//   constructor() {
//     super(4);
//   }
// }

// var result = new Dog();
// console.log(result.legs);
// //TASK 2

class Animal {}

class Cat extends Animal {
  constructor() {
    super();
    this.noise = "meow";
  }
}

var result = new Animal();
console.log(result.noise);
//TASK 3

class Animal {}

class Cat extends Animal {
  constructor() {
    super();
    this.noise = "meow";
  }
}

var result = new Animal();
console.log(result.noise);

class Person {
  sayHello() {
    console.log("Hello");
  }
}

class Friend extends Person {
  sayHello() {
    console.log("Hey");
  }
}

var result = new Friend();
result.sayHello();
