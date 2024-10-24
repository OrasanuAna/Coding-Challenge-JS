/*
function logger() {
  console.log("My name is Ana");
}
///////////////////////////////////////////////////////
//calling / running / invoking function
logger();
logger();

///////////////////////////////////////////////////////
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOranceJuice = fruitProcessor(2, 4);
console.log(appleOranceJuice);


///////////////////////////////////////////////////////
// Function declaration
function calcAge1(birthYear) {
  return 2024 - birthYear;
}

const age1 = calcAge1(2003);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calcAge2(2003);
console.log(age1, age2);

// Arrow function
const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(2003);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2003, "Ana"));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName, gender) {
  const age = calcAge(birthYear);

  const retireAge =
    gender === "female" ? 60 : gender === "male" ? 64 : undefined;

  const retirement = retireAge - age;
  const retiredYears = -retirement;

  return retirement > 0
    ? `${firstName} retires in ${retirement} years`
    : retirement === 0
    ? `${firstName} is retiring this year`
    : `${firstName} este pensionat de ${retiredYears} ani`;

  //return `${firstName} retires in ${retirement} years`;
};

const ana = yearsUntilRetirement(2003, "Ana", "female");
console.log(ana);

const ion = yearsUntilRetirement(2003, "Ion", "male");
console.log(ion);
