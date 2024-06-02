class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    // Method
    logMe() {
        return `${this.name} ${this.email} ${this.password}`;
    }
}

class Teacher extends User {
    constructor(name, email, password, subject) {
        super(name, email, password); // Call the parent class constructor
        this.subject = subject;
    }

    addCourse() {
        console.log(`A bew course was added by ${this.name}`);
    }
}

const teacher = new Teacher('John Doe', 'john@teacher.com', "123456", "Maths");

console.log(teacher);

console.log(teacher instanceof User);   // true

