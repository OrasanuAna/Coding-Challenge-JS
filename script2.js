/*
function logger() {
  console.log("My name is Ana");

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


///////////////////////////////////////////////////////
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
}


///////////////////////////////////////////////////////
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


///////////////////////////////////////////////////////
const friend1 = "Ana";
const friend2 = "Maria";
const friend3 = "Diana";

const friends = ["Ana", "Maria", "Diana"];
console.log(friends);

const years = new Array(2001, 2002, 2003);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);
///////////////////////////////////////////////////////


//Basic Array Operations (Methods)

const friends = ["Ana", "Maria", "Diana"];

//Add elements
const newLength = friends.push("Ioana");
// ["Ana", "Maria", "Diana", "Ioana"]
console.log(friends);
console.log(newLength);

friends.unshift("Stela");
// ["Stela", "Ana", "Maria", "Diana", "Ioana"]
console.log(friends);

//Remove elements
friends.pop(); //last
// ["Stela", "Ana", "Maria", "Diana"]
const popped = friends.pop();
// ["Stela", "Ana", "Maria"]
console.log(popped);
console.log(friends);

friends.shift(); //first
// ["Ana", "Maria"]
console.log(friends);

console.log(friends.indexOf("Ana")); // 0
console.log(friends.indexOf("Bob")); // -1

console.log(friends.includes("Ana")); //true
console.log(friends.includes("Bob")); // false

friends.push(23);
console.log(friends.includes("23")); //false
console.log(friends.includes(23)); //true

friends.includes("Cristina")
  ? console.log("You have a friend called Cristina")
  : console.log("You dont have a friend called Cristina");

//.push() .unshift() .pop() .shift() .indexOf() .includes()

//Introduction to Objects

const ana = {
  firstName: "Ana",
  lastName: "Orășanu",
  age: 2024 - 2003,
  job: "web developer",
  friends: ["Stefan", "Alexandru", "Andrei"],
};

console.log(ana);

console.log(ana.lastName);
console.log(ana["lastName"]);

const nameKey = "Name";
console.log(ana["first" + nameKey]);
console.log(ana["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Ana? Choose between fistName, lastName, age, job, and friends."
);

console.log(ana[interestedIn]);

if (ana[interestedIn]) {
  console.log(ana[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between fistName, lastName, age, job, and friends."
  );
}

ana.location = "Romania";
ana["github"] = "OrasanuAna";
console.log(ana);

//Challenge
//"Ana has 3 friends, and her best friend is called Stefan."

console.log(
  `${ana.firstName} has ${ana.friends.length} friends, and her best friend is called ${ana.friends[0]}.`
);
*/

//Object Methods

const ana = {
  firstName: "Ana",
  lastName: "Orășanu",
  age: 2024 - 2003,
  job: "web developer",
  friends: ["Stefan", "Alexandru", "Andrei"],
};
