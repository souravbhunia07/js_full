let myName = "John     ";

// console.log(myName.length); // 4
// console.log(myName.trim()); // John
// console.log(myName.trim().length); // 4

let myHeroes = ["Superman", "Batman", ", Spiderman"];

let heroPower = {
    Superman: "Fly",
    Batman: "Money",
    Spiderman: "Web",

    getSpiderPower: function () {
        console.log(`Spiderman power is ${this.Spiderman}`);
    },
};

Object.prototype.sourav = function () {
    console.log("Sourav is present in all objects.");
};

// heroPower.sourav();
myHeroes.sourav(); // array is also an object

/*
array, string, object -> object -> null
*/

// Inheritance

const User = {
    name: "chai",
    email: "chat.google.com",
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport, // Inheritance
};

Teacher.__proto__ = User; // Inheritance

// modern syntax
Object.setPrototypeOf(Teacher, User);

let anotherUserName = "chaiAurCode    ";

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUserName.trueLength();
"chai".trueLength();