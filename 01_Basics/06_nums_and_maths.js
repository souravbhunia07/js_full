const score = 4000;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length); // Convert into string
console.log(balance.toFixed(2));

const otherNumber = 223.5443;
console.log(otherNumber.toPrecision(3)); // Returns string
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // Apply commas
const maxValue = Number.MAX_VALUE;
const minValue = Number.MIN_VALUE;
console.log(maxValue);

/******************** Maths *****************/
console.log(Math);
console.log(Math.abs(-4)); // changes -ve into +ve
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.1));  // 5
console.log(Math.floor(4.8)); // 4
console.log(Math.sqrt(25)); // 5
console.log(Math.pow(5, 2));  // 25
console.log(Math.min(2, 1, 4, 343, 23)); // 1
console.log(Math.max(2, 1, 4, 343, 23)); // 343
console.log(Math.random()); // Give random value
console.log(Math.floor(Math.random() * 10) + 1); // 0-10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Important