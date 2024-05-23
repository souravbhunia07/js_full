// singleton
/*
a singleton object is an object that is instantiated only once during the lifetime of an application. This means that every time you request or access the singleton object, you always get the same instance.
*/
// Object.create

// object literals 

const mySym = Symbol("key1");

const jsUser = {
    name: "Sourav",
    "full name": "Sourav Bhunia",
    age: 19,
    localtion: "Jaipur",
    email: "sourav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"],
    [mySym]: "myKey1",
}

// accessing the object
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]); // Not able to acces using dot operator
console.log(jsUser[mySym]);

// Changing values of objects
jsUser.email = "sourav@microsoft.com";
// Object.freeze(jsUser);
jsUser.email = "sourav@chatgpt.com"; // Not ablr to change due to freeze
console.log(jsUser); 

jsUser.greetings = function() {
    console.log("Hello user!");
}

jsUser.greetings2 = function() {
    console.log(`Hello user! ${this.name}`); // This is used to referencing the same object
}

// console.log(jsUser.greetings); // Undefined
console.log(jsUser.greetings());
console.log(jsUser.greetings2());

// const tinderUser = new Object(); // singleton object
const tinderUser = {}; // Non singleton object

tinderUser.id = "123abc";
tinderUser.name = "sourav";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "sourav@google.com",
    fullName: {
        userFullName: {
            firstName: "sourav",
            lastname: "bhunia",
        }
    }
}

console.log(regularUser.fullName); // Storing objects inside an object

console.log(regularUser.fullName.userFullName.firstName); // chaining
console.log(regularUser.fullName?.userFullName.firstName); // optional chaining

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = {obj1, obj2}; // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj3 = Object.assign({}, obj1, obj2, obj4); // returns a combined object
console.log(obj3);

const spreadobj = {...obj1, ...obj2, ...obj4};
console.log(spreadobj);

const user = [
    {
        id: 1,
        email: "sourav@google.com"
    },
    {
        id: 1,
        email: "sourav@google.com"
    },
    {
        id: 1,
        email: "sourav@google.com"
    },
    {
        id: 1,
        email: "sourav@google.com"
    },
]

console.log(Object.keys(tinderUser)); // create a array of keys
console.log(Object.values(tinderUser)); // create a array of values

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

// destructuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Sourav"
}

// course.courseInstructor

const {courseInstructor} = course; // destructuring
const {courseInstructor: instructor} = course;
console.log(courseInstructor);
console.log(instructor);

