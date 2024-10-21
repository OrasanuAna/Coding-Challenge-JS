//Coding Challenge #2

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
