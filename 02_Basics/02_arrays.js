const marvel_heroes = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heroes[3][1]); // flash

const allHeroes = marvel_heroes.concat(dc_heroes);
console.log(allHeroes); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// spread operator (Mostly used)
const allNewHeores = [...marvel_heroes, ...dc_heroes];
console.log(allNewHeores); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray); // all array in same level
/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/

console.log(Array.isArray("sourav"));
console.log(Array.from("sourav")); // will convert into an array
console.log(Array.from({name: "sourav"})); // []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Convert's into an array