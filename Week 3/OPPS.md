### Object Oriented Programming principles
In this reading, you'll learn about the benefits of object-oriented programming (OOP) and the OOP principles.


#### The Benefits of OOP
There are many benefits to using the object-oriented programming (OOP) paradigm.

OOP helps developers to mimic the relationship between objects in the real world. In a way, it helps you to reason about relationships between things in your software, just like you would in the real world. Thus, OOP is an effective approach to come up with solutions in the code you write. OOP also:

1. Allows you to write modular code,

2. Makes your code more flexible and

3. Makes your code reusable.

#### The Principles of OOP
The four fundamental OOP principles are inheritance, encapsulation, abstraction and polymorphism. You'll learn about each of these principles in turn. The thing to remember about Objects is that they exist in a hierarchal structure. Meaning that the original base or super class for everything is the Object class, all objects derive from this class. This allows us to utilize the Object.create() method. to create or instansiate objects of our classes.

`//codes`
This concept is explored within the next section on inheritance

#### OOP Principles: Inheritance
Inheritance is one of the foundations of object-oriented programming.

In essence, it's a very simple concept. It works like this: 

There is a base class of a "thing".

There is one or more sub-classes of "things" that inherit the properties of the base class (sometimes also referred to as the "super-class")

There might be some other sub-sub-classes of "things" that inherit from those classes in point 2.

Note that each sub-class inherits from its super-class. In turn, a sub-class might also be a super-class, if there are classes inheriting from that sub-class.

All of this might sound a bit "computer-sciency", so here's a more practical example:

There is a base class of "Animal".

There is another class, a sub-class inheriting from "Animal", and the name of this class is "Bird".

Next, there is another class, inheriting from "Bird", and this class is "Eagle".

Thus, in the above example, I'm modelling objects from the real world by constructing relationships between Animal, Bird, and Eagle. Each of them are separate classes, meaning, each of them are separate blueprints for specific object instances that can be constructed as needed.

To setup the inheritance relation between classes in JavaScript, I can use the extends keyword, as in class B extends A.

I don't really need to worry or even waste time thinking about how the toUpperCase() method works. All I want is to use it, since I know it's available to me. Even if the underlying syntax - that is, the implementation of the toUpperCase() method changes - as long as it doesn't break my code, I don't have to worry about what it does in the background, or even how it does it.

















