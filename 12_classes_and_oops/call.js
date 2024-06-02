function setUserName(username) {
    this.username = username;
    console.log("called");
}

function createUser(username, email, password) {
    // setUserName(username); // this will not work

    setUserName.call(this, username); // mera saman aapka hua because of 'this'

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@google.com", "123");

console.log(chai);