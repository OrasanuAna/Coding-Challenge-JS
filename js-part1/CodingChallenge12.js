"use strict";
//Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀

*/

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

let markHigherBMI =
  BMIMark > BMIJohn
    ? console.log(
        `Mark's BMI is higher than John's! Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`
      )
    : console.log(
        `John's BMI is higher than Mark's! John's (${BMIJohn}) is higher than Mark's BMI (${BMIMark})`
      );
