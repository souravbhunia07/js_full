setTimeout(() => {
  console.log('Hello from setTimeout');
}, 2000); // setTimeout is an async function

const changeText = () => {
    document.querySelector('h1').innerHTML = 'Text changed';
}

const changeMe = setTimeout(changeText, 3000); // setTimeout will call changeText after 3 seconds

document.querySelector('#stop').addEventListener('click', () => {
    clearTimeout(changeMe); // clearTimeout will stop the setTimeout
});

const sayDate = (str) => {
    console.log(str, Date.now());
}

let intervalId; // setInterval is an async function, it will run every 1 second continuously

document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(intervalId); // clearInterval will stop the setInterval
});

document.querySelector('#start').addEventListener('click', () => {
    intervalId = setInterval(sayDate, 1000, "hi");
});