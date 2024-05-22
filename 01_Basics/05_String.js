const { replace } = require("lodash");

const name = "Sourav";
const repoCount = 50

// console.log(name + repoCount); // old

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const newName = new String("Sourav-Bhunia");
console.log(newName[0]);
console.log(newName.__proto__);
console.log(newName.length);
console.log(newName.toUpperCase()); //will not change original value
console.log(newName.charAt(2)); // Give the character at that position
console.log(newName.indexOf('v')); // Give index
const newString = newName.substring(4, 8);
console.log(newString); // [0, n) Sour
const anotherString = newName.slice(0, 4);
console.log(anotherString); // Sour
const reverseString = newName.slice(-12, 4);
console.log(reverseString); // (-12, 4) =>  (1, 4)
const newStringOne = "   Sourav  ";
console.log(newStringOne.trim());
const url = "https://sourav.com/sourav%20bhunia";
console.log(url.replace('%20', '-'));
console.log(url.includes('sourav')); // true

const gameName = new String("The-Lost-King");
console.log(gameName.split('-')); // Returns an array, [ 'The', 'Lost', 'King' ]

const reverseGameName = gameName.split('').reverse().join(''); // reversing a string
console.log(reverseGameName);

const gameNameArray = gameName.split('-');
console.log(gameNameArray.reverse());