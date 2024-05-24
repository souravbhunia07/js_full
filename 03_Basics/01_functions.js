function sayMyName() {
    console.log("S");
    console.log("O");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("V");
}

sayMyName() // () for execution or gives reference

function addTwoNumber(number1, number2) {
    console.log(number1 + number2);
}

function addTwoNumberUsingReturn(number1, number2) {
    let result = number1 + number2;
    return result;
}

addTwoNumber(6, 4); // 10

addTwoNumber(6, "4"); // 64

const result = addTwoNumber(6, 4);
console.log(`Result: ${result}`); // Undefined

const result2 = addTwoNumberUsingReturn(6, 4);
console.log(`Result: ${result2}`); // 10

function loginUserMessage(username = "sam") {

    if(username === undefined) {
        console.log("Please enter a username!");
        return;
    }

    return `${username} just logged in`;
}

console.log(loginUserMessage("Sourav"));

console.log(loginUserMessage()); // undefined

// rest operator
function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500)); // [ 200, 400, 500 ]

const user = {
    username: "sourav",
    price: 100
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user); 

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[2];
}

console.log(returnSecondValue(myNewArray)); // 100