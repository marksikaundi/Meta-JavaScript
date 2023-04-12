function listArrayItems(arr) {
  // ... code to be added ...
}

function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    // ... code pending here ...
  }
}
// Now all that I have left to decide is how I want to output each item from the received arr array.

//It can be as simple as console logging the array item index of the current value of i:
function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]); //display the array item where the index is euqal to i
  }
}

// If I now invoke the listArrayItems function, I can, for example, give it the following array of colors:
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
listArrayItems(colors); //display all items in the array at once

// I can update the output any way I like. For example, here are my arr items with a number in front of each item:

//function that takes an array as input and display all items of this array
function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
listArrayItems(colors);

// To start the count from one instead of zero, I can update my function declaration as follows:

function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i + 1, arr[i]);
  }
}


//I can even add one or more conditions, such as:  
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}

//Now I'm adding control flow right inside my function, based on whether a specific array member matches a specific value - in this case the string "red".
//Invoking my newest updated version of the listArrayItems function on the colors array will now result in the following output:



