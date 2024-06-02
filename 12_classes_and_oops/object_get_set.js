const User = {
    _email: 'sourav@gmail.com',
    _password: 'password',

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    },
}

const tea = Object.create(User);
console.log(tea.email); // access the email property