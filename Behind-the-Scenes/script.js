'use strict';

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
