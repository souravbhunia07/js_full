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
// console.log(typeof stringNumber);
// console.log(stringNumber);

// ******************* Operations ********************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

let str1 = "hello";
let str2 = " sourav";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log(true); // true
// console.log(+true); // 1
// console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // assign 4 to all variable

let gameCounter = 100;
gameCounter++; // Postfix
++gameCounter; // Prefix
console.log(gameCounter); // 101