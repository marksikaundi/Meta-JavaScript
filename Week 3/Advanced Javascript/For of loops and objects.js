// In this reading, you'll learn how the for of loop works conceptually.

// To begin, it's important to know that a for of loop cannot work on an object directly, since an object is not iterable. For example:
const car = {
  speed: 100,
  color: "blue",
};

for (prop of car) {
  console.log(prop);
}
//Running the above code snippet will throw the following error:

//Contrary to objects, arrays are iterable. For example:

const colors = ["red", "orange", "yellow"];
for (var color of colors) {
  console.log(color);
}

// Built-in methods
// The Object.keys() method
// The Object.keys() method receives an object as its parameter. Remember, this object is the object you want to loop over. It's still too early to explain how you'll loop over the object itself; for now, focus on the returned array of properties when you call the Object.keys() method.

// Here's an example of running the Object.keys() method on a brand new car2 object
const car2 = {
  speed: 200,
  color: "red",
};
console.log(Object.keys(car2)); // ['speed','color']

// So, when I run Object.keys() and pass it my car2 object, the returned value is an array of strings, where each string is a property key of the properties contained in my car2 object.

// The Object.values() method
// Another useful method is Object.values():
const car3 = {
  speed: 300,
  color: "yellow",
};
console.log(Object.values(car3)); // [300, 'yellow']

// The Object.entries() method
// Finally, there's another useful method, Object.entries(), which returns an array listing both the keys and the values.
const car4 = {
  speed: 40,
  color: "magenta",
};
console.log(Object.entries(car4));

// Examples
// You now have all the ingredients that you need to loop over any object's own property keys and values.

// Here's a very simple example of doing just that:
var clothingItem = {
  price: 50,
  color: "beige",
  material: "cotton",
  season: "autumn",
};

for (key of Object.keys(clothingItem)) {
  console.log(keys, ":", clothingItem[key]);
}
