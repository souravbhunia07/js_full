// document.getElementById('title').innerHTML = 'Hello World'; 
// document.getElementById('title').className; // 'heading'
// document.getElementById('title').id; // 'title'
// document.getElementById('title').getAttribute('id'); // 'title'
// document.getElementById('title').setAttribute('id', 'test heading'); 

const title = document.getElementById('title');
title.style.backgroundColor = 'green';
title.style.padding = '10px';
title.style.borderRadius = '50px';
title.textContent; // 'DOM learning test text' it shows the text even if it is hidden due to display: none
title.innerText; // 'DOM learning' skips the span tag which is hidden due to display: none
title.innerHTML; // 'DOM learning <span style="display: none;">test text</span>' it shows the text even if it is hidden due to display: none

// querySelector
document.querySelector('h2'); // selects the first h2 tag
document.querySelector('#title'); // selects the element with id 'title'
document.querySelector('.heading'); // selects the first element with class 'heading'
document.querySelector('input[type="password"]'); // selects the first input element with type 'password'
document.querySelector('p:first-child'); // selects the first p tag which is the first child of its parent
const myul = document.querySelector('ul');
const turngreen = myul.querySelector('li:last-child'); // selects the last li tag which is the last child of its parent
turngreen.style.backgroundColor = 'green';
turngreen.style.padding = '10px';
turngreen.innerHTML = 'I am the last child';

document.querySelectorAll('h2'); // selects all h2 tags
tempLiList = document.querySelectorAll('li');
tempLiList.forEach((li) => {
    li.style.backgroundColor = 'blue';
    li.style.padding = '10px';
    li.innerHTML = 'I am a list item';
});
tempLiList[0].style.backgroundColor = 'red';
const tempClassList = document.getElementsByClassName('list-item'); // HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
// tempClassList.forEach((li) => {
//     li.style.backgroundColor = 'yellow';
//     li.style.padding = '10px';
//     li.innerHTML = 'I am a list item';
// } // TypeError: tempClassList.forEach is not a function
const convertedArray = Array.from(tempClassList); // converts HTMLCollection to an array
convertedArray.forEach((li) => {
    li.style.backgroundColor = 'blue';
    li.style.padding = '10px';
    li.innerHTML = 'I am a list updated item';
});