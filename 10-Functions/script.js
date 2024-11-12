'use strict';

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
*/

const flight = 'LH234';
const ana = {
  name: 'Ana Orasanu',
  passport: 12345678910,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Miss. ' + passenger.name;

  if (passenger.passport === 12345678910) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, ana);
console.log(flight);
console.log(ana);

// Is the same as doing...
const flightNum = flight;
const passenger = ana;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(ana);
checkIn(flight, ana);
