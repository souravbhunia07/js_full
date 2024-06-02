const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB calls, crytpgraphy, network 
    setTimeout(() => {
        console.log('Promise One is resolved');
        resolve(); // resolve('Data to be sent back');
    }, 3000);
});

promiseOne.then(() => {
    console.log('Promise consumed');
});

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise Two is resolved');
        resolve();
    }, 2000);
}).then(() => {
    console.log('Promise Two consumed');
});

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise Three is resolved');
        resolve({username: 'John Doe', email: 'john@gmail.com'});
    }, 1000);
});

promiseThree.then((user) => {
    console.log('Promise Three consumed', user);
});

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error) {
            resolve({username: 'John Doe', password: "1234"});
        } else {
            reject('Error occured');
        }
    }, 4000);
});

promiseFour.then((user) => {
    console.log('Promise Four consumed', user);
    return user.username;
}).then((username) => {
    console.log('Username is', username);
}).catch((error) => {
    console.log('Error occured', error);
}).finally(() => {
    console.log('Promise Four is done');
});

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error) {
            resolve({username: 'John Doe', password: "1234"});
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const user = await promiseFive;
        console.log('Promise Five consumed', user);
    } catch (error) {
        console.log('Error occured in promise five', error);
    }
}

consumePromiseFive();

async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
};

// getAllUser();

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {return response.json()})
.then(data => console.log(data))
.catch(error => console.log('Error occured', error));