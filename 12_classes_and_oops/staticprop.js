class User {
    constructor(username) {
        this.username = username;
    }

    // Method
    logMe() {
        console.log(`User: ${this.username}`);
    }

    static createId() {
        return Math.floor(Math.random() * 100);
    } // This method is not available to the instances of the class
}

const sourav = new User('sourav');
// console.log(sourav.createId()); // Error

class Teacher extends User {
    constructor(username, subject) {
        super(username);
        this.subject = subject;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const iphone = new Teacher('iphone', 'JavaScript');
console.log(iphone.logMe()); 