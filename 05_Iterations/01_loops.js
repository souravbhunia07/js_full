// for
for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element === 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        // console.log(`outerloop: ${i}, innerloop: ${j}`);
        // console.log(i + '*' + j + ' = ' + i * j);
    }
}

let myArray = ["flash", "batman", "superman"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break(stop the control flow) and continue
// for (let index = 1; index <= 20; index++) {
//     if(index == 5) {
//         console.log(`Detected 5`);
//         break;
//     } 
//     console.log(`Values of i is ${index}`);
// }

// for (let index = 1; index <= 20; index++) {
//     if(index == 5) {
//         console.log(`Detected 5`);
//         continue;
//     } 
//     console.log(`Values of i is ${index}`);
// }

// while
let index = 0;
// while (index <= 10) {
//     // console.log(index);
//     index += 2;
// }

// while(index < myArray.length) {
//     console.log(`Value is ${myArray[index]}`);
//     index++;
// }

let score = 1;

do {
    // console.log(score);
    score++;
} while (score < 10);

// for of
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!";

for (const greet of greetings) {
    // console.log(greet);
}

// Maps
const map = new Map();
map.set('IN', "India");
map.set('Fr', "France");
map.set('USA', "United States of America");
map.set('IN', "India");

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObj = {
    'game1': "NFS", 
    'game2': "Spiderman",
}

// will not work for objects
// for (const [key, value] of map) {
//     // console.log(key, ':-', value);
// }

// for in // gives key as output
for (const key in myObj) {
    // console.log(`${key} for games is ${myObj[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    // console.log(programming[key]);
}

// for (const key in map) { // Not able to iterate as map is not iteratable
//     console.log(key);
// }

// for each
// programming.forEach((item) => {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }

// programming.forEach(printMe); // reference

// programming.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
]

myCoding.forEach((item) => {
    // console.log(item.languageFileName);
})

// const values = programming.forEach((item) => {
//     console.log(item);
// })

// console.log(values); // Does not return values

// filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 4)

// const newNums = myNums.filter((num) => {
//     return num > 4;
// })

let newNums = [];

myNums.forEach((num) => {
    if(num > 4) {
        newNums.push(num);
    }
})

// console.log(newNums);

const books = [
    {
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        publish: "July 11, 1960"
    },
    {
        title: "1984",
        genre: "Dystopian",
        publish: "June 8, 1949"
    },
    {
        title: "The Great Gatsby",
        genre: "Fiction",
        publish: "April 10, 1925"
    },
    {
        title: "Pride and Prejudice",
        genre: "Romance",
        publish: "January 28, 1813"
    },
    {
        title: "The Catcher in the Rye",
        genre: "Coming-of-age",
        publish: "July 16, 1951"
    },
    {
        title: "Brave New World",
        genre: "Dystopian",
        publish: "January 1, 1932"
    },
    {
        title: "The Hobbit",
        genre: "Fantasy",
        publish: "September 21, 1937"
    },
    {
        title: "The Lord of the Rings",
        genre: "Fantasy",
        publish: "July 29, 1954"
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        genre: "Fantasy",
        publish: "June 26, 1997"
    },
    {
        title: "The Hunger Games",
        genre: "Dystopian",
        publish: "September 14, 2008"
    }
];

const userBooks = books.filter((bk) => {
    return bk.genre === "Fantasy" && bk.publish >= "1997";
})

// console.log(userBooks);

// map (return value)
const newVar = myNums.map((num) => {
    return num + 10;
})
// console.log(newVar);

// chaining
const nums = myNums
            .map((num) => num * 10)
            .map((num) => num + 1)
            .filter((num) => num >= 40);

// console.log(nums);

// reduce
const myTotal = myNums.reduce((acc, currval) => {
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
}, 0);

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Laptop",
        price: 999.99
    },
    {
        itemName: "Headphones",
        price: 49.99
    },
    {
        itemName: "Smartphone",
        price: 799.99
    },
    {
        itemName: "Bookshelf",
        price: 149.99
    }
];

const cartValue = shoppingCart.reduce((acc, item) => {
    return acc + item.price;
}, 0);

console.log(cartValue);