// document.getElementById('img1').onclick = function() {
//   alert('Image 1 clicked');
// };

document.getElementById('img1').addEventListener('click', function() {
//   alert('Image 1 clicked');
});

//attachEvent() is not supported in modern browsers
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, pageX, pageY, screenX, screenY
// altKey, ctrlKey, shiftKey, metaKey, keyCode, charCode

// document.getElementById('img2').addEventListener('click', function(e) {
    // e.stopPropagation(); // stop event bubbling
//   console.log("image 2 clicked");
// }, false);
// false => event bubbling
// true => event capturing
// document.getElementById('images').addEventListener('click', function(e) {
//   console.log("ul is clicked");
// }); // event bubbling => implement inside to outside(default)

document.getElementById('images').addEventListener('click', function(e) {
  console.log("ul is clicked");
}, true); // event capturing => implement outside to inside

document.getElementById('img2').addEventListener('click', function(e) {
    console.log("image 2 clicked");
}, true);

document.getElementById('google').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation(); // stop event bubbling
    console.log("google clicked");
});

document.getElementById('images').addEventListener('click', function(e) {
//   console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode;
        removeIt.parentNode.removeChild(removeIt); // remove from clicked element
    }
}, false);