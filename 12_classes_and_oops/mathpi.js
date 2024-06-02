// console.log(Math.PI); // 3.141592653589793
// Math.PI = 5;
// console.log(Math.PI); // not 5, still 3.141592653589793

const descriptor =  Object.getOwnPropertyDescriptor(Math, 'PI'); 
console.log(descriptor); 

const chai = {
    name: 'ginger chai',
    price: 100,
    isAvailable: true,

    orderChai: function() {
        console.log(`Order placed for ${this.name}`);
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'price'));

// Object.defineProperty(chai, 'price', {
//     writable: false,
//     enumerable: false, // not visible in for..in loop
// });

// console.log(Object.getOwnPropertyDescriptor(chai, 'price'));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}