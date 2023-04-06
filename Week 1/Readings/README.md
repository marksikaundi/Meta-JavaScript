### Operators in depth
In this reading, you will learn about additional operators, operator precedence and operator associativity. I'll also provide you with some examples of logical operators.

1. Additional operators
Logical AND operator: && 

Logical OR operator: || 

Logical NOT operator: ! 

The modulus operator: % 

The equality operator: ==

The strict equality operator: ===

The inequality operator: !=

The strict inequality operator: !==

The addition assignment operator: += 

The concatenation assignment operator: += (it's the same as the previous one - more on that later)

The logical AND operator in JavaScript: &&
The logical AND operator is, for example, used to confirm if multiple comparisons will return true.

In JavaScript, this operator consists of two ampersand symbols together: &&.

Let's say you're tasked with coming up with some code that will check if the currentTime variable is between 9 a.m. and 5 p.m. The code needs to console.log true if currentTime > 9 and if currentTime < 17.

Here's a solution: 
`console.log(currentTime > 9 && currentTime < 17);`

How does this code work?

First, on line one, I set the currentTime variable, and assign the value of 10 to it.

Next, on line two I console log two comparisons: 

currentTime > 9 

currentTime < 17

I also use the && logical operator to join the two comparisons.

Effectively, my code is interpretted as the following: