'use strict';
/*
function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1997 && birthYear <= 2012) {
      var millenial = true;
      const str = `Oh, and you're a Generation Z, ${firstName}`;
      console.log(str);
    }
    // console.log(str);
    console.log(millenial);
  }
  printAge();

  return age;
}

const firstName = 'Ana';

calcAge(2003);
///////////////////////////////////////////////////////////////


var me = 'Ana';
let job = 'web developer';
const year = 2003;

//Functions
console.log(addDecl(2, 3));

function addDecl(a, b) {
  return a + b;
}

function addExpr(a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;

//Exemple

function deleteShoppingCart() {
  console.log('All products deleted!');
}


///////////////////////////////////////////////////////////////

//console.log(this);

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};
//calcAge(2003);

const calcAgeArrow = birthYear => {
  console.log(2024 - birthYear);
  console.log(this);
};
//calcAgeArrow(2000);

const ana = {
  year: 2003,
  calcAge: function () {
    console.log(this), console.log(2024 - this.year);
  },
};
//ana.calcAge();

const matilda = {
  year: 2000,
};

matilda.calcAge = ana.calcAge;
matilda.calcAge();

const f = ana.calcAge;
f();

///////////////////////////////////////////////////////////////

const ana = {
  firstName: 'Ana',
  year: 2003,
  calcAge: function () {
    //console.log(this);
    console.log(this), console.log(2024 - this.year);

    //Solution 1
    //   const self = this; //self or that
    //   const isGenerationZ = function () {
    //     console.log(self);
    //     //console.log(this.year >= 1997 && this.year <= 2012);
    //     console.log(self.year >= 1997 && self.year <= 2012);
    //   };

    //Solution 2
    const isGenerationZ = () => {
      console.log(this);
      //console.log(this.year >= 1997 && this.year <= 2012);
      console.log(this.year >= 1997 && this.year <= 2012);
    };
    isGenerationZ();
  },

  greet: function () {
    console.log(this), console.log(`Hey ${this.firstName}`);
  },
};
//birthYear >= 1997 && birthYear <= 2012

ana.greet();
ana.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

const addArrow = (a, b) => {
  console.log(arguments);
  a + b;
};
addArrow(2, 5, 8, 12);
///////////////////////////////////////////////////////////////

let age = 20;
let oldAge = age;
age = 21;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Ana',
  age: 21,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
///////////////////////////////////////////////////////////////
*/

//Primitive types
let lastName = 'Vranceanu';
let oldLastName = lastName;
lastName = 'Orasanu';
//console.log(lastName, oldLastName);

//Reference types
const cristina = {
  firstName: 'Cristina',
  lastName: 'Vranceanu',
  age: 25,
};

const merriedCristina = cristina;
merriedCristina.lastName = 'Orasanu';

// console.log('Before marriage: ', cristina);
// console.log('After marriage: ', merriedCristina);

//Copying objects
const cristina2 = {
  firstName: 'Cristina',
  lastName: 'Vranceanu',
  age: 25,
  family: ['Ana', 'Catalin'],
};

const cristinaCopy = Object.assign({}, cristina2);
cristinaCopy.lastName = 'Orasanu';
// console.log('Before marriage: ', cristina2);
// console.log('After marriage: ', cristinaCopy);

cristinaCopy.family.push('Daniel');
cristinaCopy.family.push('Georgiana');

console.log('Before marriage: ', cristina2);
console.log('After marriage: ', cristinaCopy);
