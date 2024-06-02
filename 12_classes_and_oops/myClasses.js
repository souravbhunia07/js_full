class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    // Method
    encryptPassword() {
        return `${this.password}1234`;
    }

    changeUserName() {
        return `${this.name.toUpperCase()}`;
    }
}

const chai = new User("chai", "chai@google.com", "abc");

console.log(chai.encryptPassword());
console.log(chai.changeUserName()); // CHAI

// Behind the scene

function UserUsingFunction(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}

UserUsingFunction.prototype.encryptPassword = function () {
    return `${this.password}1234`;
}

UserUsingFunction.prototype.changeUserName = function () {
    return `${this.name.toUpperCase()}`;
};

const googler = new UserUsingFunction("googler", "googler@google.com", "abc");

console.log(googler.encryptPassword());
console.log(googler.changeUserName()); // GOOGLER