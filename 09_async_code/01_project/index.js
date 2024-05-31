let changeColor;

document.getElementById('start').addEventListener('click', () => {
  changeColor = setInterval(() => {
    let randomColor = `#${Math.random().toString(16).substr(-6)}`;
    // console.log(randomColor);
    document.body.style.backgroundColor = randomColor;
  }, 1000);
});

document.getElementById('stop').addEventListener('click', () => {
  clearInterval(changeColor);
  changeColor = null;
});