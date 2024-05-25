// Immediately Invoked Function Expressions (IIFE)

/*
Used to prevent global scope polution.
*/

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // Must use semicolon

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Sourav");