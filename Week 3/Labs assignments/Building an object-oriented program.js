class Person {
  constructor(name = "Mark", age = "23", energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  sleep() {
    this.energy += 10;
  }
  doSomethingFun() {
    this.energy -= 10;
  }
}

//Task 2 Code a Worker class
class Worker extends Person {
    
}
