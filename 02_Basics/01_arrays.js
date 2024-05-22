const myArr = [0, 1, 2, 3, 4, 5];

// array create shallow copy in js.
/*
shallow copy => A shallow copy of an object is a copy whose properties share the same references as those of the source.
*/
/*
Deep cpoy => A deep cpoy of an object is a copy whose properties do not share the same references point.
*/

const myHeroes = ["Iron man", "Captain America"];
const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr2[0]);

// Array methods
myArr.push(6); // Add element into array
console.log(myArr);

myArr.pop(); // Delete last element from array
console.log(myArr);

myArr.unshift(9); // Add element into the start of the array
console.log(myArr);

myArr.shift(); // Remove the first element of an array
console.log(myArr);

console.log(myArr.includes(9)); // false

console.log(myArr.indexOf(9)); // -1 (does not exist)

const newArray = myArr.join();
console.log(myArr);
console.log(newArray); // changes into string

// slice, splice
console.log("A ", myArr);
const myn1 = myArr.slice(3, 5); // [i, j) (exclude last element)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(3, 5); // [i, j] (include last element)
console.log(myn2);
console.log("C ", myArr); // remove the splice element