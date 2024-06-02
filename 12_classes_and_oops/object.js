function multiplyBy5(num) {
    return num * 5;
}

multiplyBy5.power = 2; // Adding a property to the function

console.log(multiplyBy5(5)); // 25
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // {}

function createUser(name, score) {
    this.name = name;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++; // whoever calls this function, their score will be incremented
};

createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
};

const chai = new createUser("Chai", 25); // new keyword creates a new object
const tea = new createUser("tea", 250);

chai.printMe(); // score is 25
tea.printMe(); // score is 250

/*
Here's what happens behind the scenes when we use the new keyword:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object is linked to the prototype property of the constructor function. This means that the newly created object inherits all the properties and methods of the constructor function's prototype property.

The constructor function is called: The constructor function is called with the specified arguments and this keyword. The value of this is the newly created object. If no explicit return value is specified from the constructor function, the JavaScript engine returns the newly created object.

The new object is returned: If the constructor function returns an object, that object is returned instead of the newly created object. If the constructor function doesn't return an object, the newly created object is returned.
*/