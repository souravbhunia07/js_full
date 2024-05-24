// Global scope
let a = 10
const b = 20
var c = 30 // not suitable for scope

if(true) {  // Block scope
    let a = 10 // Independent from global scope
    const b = 20
    var c = 30;
}

console.log(a);
console.log(b);
console.log(c);

function one() {
    const username = "sourav";

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // error

    two();
}

one();

// ****************** Interesting ****//

addOne(5); // Hoisting
function addOne(num) {
    return num + 1;
}

const addTwo = (num) => { // Not able for Hoisting
    return num + 2;
}

console.log(addOne(5));
console.log(addTwo(5));