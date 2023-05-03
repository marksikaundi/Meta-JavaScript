// In this reading, you'll learn about some of the most common examples of data structures.

// The focus will be on working with the Object, Array, Map and Set data structures in JavaScript, through a series of examples.

// Note that this reading will not include a discussion of some data structures that exist in some other languages, such as Queues or Linked Lists.  Although these data structures (and other data structures too!) can be custom-coded in JavaScript, the advanced nature of these topics and the difficulty with implementing related exercises means they are beyond the scope of this reading.

// Working with arrays in JavaScript
// Previously, you've covered a lot of concepts related to how to work with JavaScript arrays.

// However, there are still a few important topics that can be covered, and one of those is, for example, working with some built-in methods.

// In this reading, the focus is on three specific methods that exist on arrays:

//  forEach

// filter

//  map

//  Let's explore these methods.

// The forEach() method
// Arrays in JavaScript come with a handy method that allows you to loop over each of their members.

// Here's the basic syntax:
const fruits = ["kiwi", "mango", "apple", "pear"];
function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);
//To explain the syntax, the forEach() method accepts a function that will work on each array item. That function's first parameter is the current array item itself, and the second (optional) parameter is the index.

//Very often, the function that the forEach() method needs to use is passed in directly into the method call, like this:
const veggies = ["onion", "garlic", "potato"];
veggies.forEach(function (veggie, index) {
  console.log(`${index}. ${fruit}`);
});

//The filter() method
//Another very useful method on the array is the filter() method. It filters your arrays based on a specific test. Those array items that pass the test are returned.

//Here's an example:
const nums = [0, 10, 20, 30, 40, 50];
nums.filter(function (num) {
  return num > 20;
});

// The map method
// Finally, there's a very useful map method.

// This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter.

// For example:

[0, 10, 20, 30, 40, 50].map(function (num) {
  return num / 10;
});
