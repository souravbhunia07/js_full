const user = {
    username: 'ironman',
    loginCount: 1,
    facebookSignedIn: true,

    getUserDetails: function() {
        console.log(`Username is ${this.username}, user has logged in ${this.loginCount} times`);
    }
}; // Object Literal

// console.log(user.username);
// console.log(user['username']);
// console.log(user.getUserDetails());

// Constructor Function (new keyword)
// const promiseOne = new Promise();
// const date = new Date();

function User(username, loginCount, facebookSignedIn) {
    this.username = username; // this keyword is used to refer to the current object (this.username is  a variable)
    this.loginCount = loginCount;
    this.facebookSignedIn = facebookSignedIn;

    this.getUserDetails = function() {
        console.log(`Username is ${this.username}, user has logged in ${this.loginCount} times`);
    }

    return this;
}

// In arrow functions, this keyword is not used

const userOne = new User('ironman', 1, true);

const userTwo = new User('captainamerica', 2, false); // overwriting the userOne object

// console.log(userOne.constructor); // User

const newHero = ["hulk", "spiderman"];
// Prototypal behaviour

