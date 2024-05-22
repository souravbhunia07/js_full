"use strict"; // Treat all code as newer version of JS

// alert(3 + 3) // We are using nodejs, not browser

/*
Referred documentation:
MDN
tc39
*/

let name = "Sourav"; // String
let age = 30; // Number
let isLoggedIn = false; // Boolean


// Number => 2^53
// bigInt => Used for large amount of number
// String => ""
// boolean => true / false
// null => Standalone value
// undefined => value is not defined
// symbol => used for uniqueness

// object

// console.log(typeof "sourav"); // string
// console.log(typeof age); // number
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined

// Primitive (call by value)
// Uses stack memory, give a copy
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 5789458943743874783232879283283n; // Big int

// console.log(bigNumber);

let myName = "sourav";
let nickName = myName; // Give a copy of myName

console.log(myName);

// Reference type (Non Primitive)
// use heap memory, give a reference
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // Array

// Object
let myObj = {
    name: "sourav",
    age: 123,
}

const myFunction = function () {
    console.log("Hello World!");
}

// Return type of non premitive is "object"

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

 let userTwo = userOne; // Give reference of userOne

userTwo.email = "user2@gmail.com";

console.log(userOne.email); // change because on updating userTwo
console.log(userTwo.email);