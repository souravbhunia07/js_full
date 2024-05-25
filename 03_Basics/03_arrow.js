const user = {
    username: "sourav",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website!`);
        console.log(this);
    }
}

// this => refers to current context

user.welcomeMessage();
console.log(this); // {}

// function chai() {
//     // console.log(this);

//     let username = "sourav";
//     console.log(this.username); // undefined
// }

// chai(); // Gives a lot of property

// const chai = function () {
//     let username = "Sourav";
//     console.log(this.username);
// }

// Arrow function
const chai = () => {
    let username = "Sourav";
    // console.log(this.username); // undefined
    console.log(this); // {}
}

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// Implicit return
// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => ({username : "sourav"}); // For object use curly braces inside parethesis

console.log(addTwo(4, 5));
