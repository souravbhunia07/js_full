/*
Comparision Operator:
<, >, <=, >=, ==, !=, ===(type checking)
*/

if(2 == "2") {
    console.log("Executed");
}

if(2 === "2") {
    console.log("executed"); // Will not execute
}

const temperature = 41;

// If-Else statements
if(temperature === 41) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

const balance = 1000;

if(balance > 500) console.log("test"); // Implicit scope

if(balance > 500) console.log("test"), 
console.log("test2"); // Immature code

if(balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 750");
} else {
    console.log("less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}