### Conditional examples
In this reading, you will learn when to use the if else statement and when to use the switch statement.

Both if else and switch are used to determine the program execution flow based on whether or not some conditions have been met.

This is why they are sometimes referred to as flow control statements. In other words, they control the flow of execution of your code, so that some code can be skipped, while other code can be executed.

At the heart of both flow control structures lies the evaluation of one or more conditions.

Generally, if else is better suited if there is a binary choice in the condition.

For example, in plain English: if it's sunny, wear sunglasses. Otherwise, don't.

In this case, using an if statement is an obvious choice.

When there are a smaller number of possible outcomes of truthy checks, it is still possible to use an if else statement, such as:

```
if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The car is not green, orange, or red");
}
```

However, if there are a lot of possible outcomes, it is best practice to use a switch statement because it is easier less verbose. Being easier to read, it is easier to follow the logic, and thus reduce cognitive load of reading multiple conditions.

Nevertheless, this is not a rule set in stone. It is simply a stylistic choice.

To reinforce this point, here's an example of the earlier if else conditional statement, using the switch syntax: 

```
//converting the previous if-else example with switch-case
switch(light) {
   case 'green':
       console.log("Drive");
       break;
   case 'orange':
       console.log("Get ready");
       break;
   case 'red':
       console.log("Don't drive");
       break;
   default:
       //this block will run if no condition matches
       console.log('The light is not green, orange, or red');
       break;
}
```