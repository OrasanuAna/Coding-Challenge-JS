//JavaScript Fundamentals – Part 1

//Coding Challenge #1

// Store Mark's and John's mass and height in variables
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

// Calculate both BMIs using the formula
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

// Create a Boolean variable 'markHigherBMI'
let markHigherBMI = BMIMark > BMIJohn ? true : false;

// Log the results
console.log("Mark's BMI:", BMIMark);
console.log("John's BMI:", BMIJohn);
console.log("Is Mark's BMI higher than John's?", markHigherBMI);
