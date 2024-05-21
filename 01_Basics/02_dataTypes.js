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
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 5789458943743874783232879283283n; // Big int

// console.log(bigNumber);

// Reference type (Non Primitive)
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

// Return tupe of non premitive is "object"
