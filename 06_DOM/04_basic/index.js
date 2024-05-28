function addLanguage(langName) {
    const li = document.createElement('li');
    li.innerHTML = `${langName}`
    document.querySelector('.language').append(li);
}

addLanguage("python");  

function addOptiLanguage(langName) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').append(li);
}

addOptiLanguage("c/c++");

// Edit Value
const secondLang = document.querySelector('li:nth-child(2)');
// secondLang.innerHTML = 'Java';
const newli = document.createElement('li');
newli.textContent = 'Mojo';
secondLang.replaceWith(newli);

const firstLang = document.querySelector('li:first-child');
firstLang.outerHTML = '<li>TypeScript</li>';

// Remove Element
const lastLang = document.querySelector('li:last-child');
lastLang.remove();