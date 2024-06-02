function init() { 
  let name = "Mozilla"; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure which is sharing memory
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
// init();

// closure example
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// returns lexical scope not only the function as they are sharing the memory
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

// document.getElementById("orange").onclick = function() {
//   document.body.style.backgroundColor = "orange";
// }

// document.getElementById("green").onclick = function() {
//     document.body.style.backgroundColor = "green";
// }

function clickHandler(color) {
    // document.body.style.backgroundColor = color; // will not work
    return function() {
        document.body.style.backgroundColor = color;
    }
}

document.getElementById("orange").onclick = clickHandler("orange");

document.getElementById("green").onclick = clickHandler("green");