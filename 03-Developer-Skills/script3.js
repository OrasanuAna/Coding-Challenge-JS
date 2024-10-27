// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//PROBLEM 1
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temperatures) {
  let max = temperatures[0];
  let min = temperatures[0];
  for (let i = 0; i < temperatures.length; i++) {
    if (typeof temperatures[i] !== 'number') continue;

    if (temperatures[i] > max) {
      max = temperatures[i];
    } else if (temperatures[i] < min) {
      min = temperatures[i];
    }
  }
  console.log(max, min);
  let amplitude = max - min;
  return amplitude;
};

console.log(calcTempAmplitude(temperatures));

//PROBLEM 2

const calcTempAmplitudeNew = function (temp1, temp2) {
  const temps = temp1.concat(temp2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;

    if (temps[i] > max) {
      max = temps[i];
    } else if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
