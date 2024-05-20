let score = "33"
// let score = "33abc"; // when coneverting gives NaN which is a number
// let score = null; // when coneverting gives 0 which is a number
// let score = undefined; // when coneverting gives NaN which is a number

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));

// "33" => 33
// "33anv" => NaN
// true => 1
// false => 0

// let isLoggedIn = 1; // true after conversion
// let isLoggedIn = ""; // false after conversion
let isLoggedIn = "Sourav"; // true after conversion

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "sourav" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);