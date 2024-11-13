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


const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// High-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Ana', 'Maria', 'Cristina'].forEach(high5);


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Ana');
greeterHey('Maria');

greet('Hello')('Ana');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Ana');
*/

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  //book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, 'Ana Orasanu');
lufthansa.book(635, 'Anya Vranceanu');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;

// Does NOT work
//book(23, 'Felix Sima');

// Call method
book.call(eurowings, 23, 'Felix Sima');
console.log(eurowings);

book.call(lufthansa, 239, 'Otilia Marculescu');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  booking: [],
};

book.call(swiss, 583, 'Zoe Trahanache');
console.log(swiss);

// Apply method
const flightData = [583, 'Zaharia Trahanache'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method
// book.call(eurowings, 23, 'Felix Sima');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Felix Sima');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Ana Maria Orasanu');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));
