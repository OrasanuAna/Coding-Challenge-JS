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
*/
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
