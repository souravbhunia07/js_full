const div = document.createElement('div');
console.log(div);
div.className = "main";
div.id = Math.floor(Math.random() * 10 + 1);
div.setAttribute("title", "generated title"); // optimized
div.style.backgroundColor = "green";
div.style.padding = "12px";
// div.innerText = "Chai aur code"; // optimized
const addText = document.createTextNode("Chai aur code");
div.appendChild(addText);

document.body.appendChild(div); // added to the window
