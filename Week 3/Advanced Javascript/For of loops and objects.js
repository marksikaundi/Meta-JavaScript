// In this reading, you'll learn how the for of loop works conceptually.

// To begin, it's important to know that a for of loop cannot work on an object directly, since an object is not iterable. For example:
const car = {
  speed: 100,
  color: "blue"
}

for(prop of car) {
  console.log(prop)
}
//Running the above code snippet will throw the following error:  

//Contrary to objects, arrays are iterable. For example:  


const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}




















