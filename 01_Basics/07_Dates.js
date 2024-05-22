let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString()); // Wed May 22 2024
console.log(myDate.toLocaleString()); // 5/22/2024, 5:35:13 PM
console.log(typeof(myDate));

let myCreatedDate = new Date(2024, 4, 22); // Wed May 22 2024
console.log(myCreatedDate.toDateString());
let mynewCreatedDate = new Date(2024, 4, 22, 1, 41); // 5/22/2024, 1:41:00 AM
console.log(mynewCreatedDate.toLocaleString());
let dateUsingString = new Date("2024-05-23");
console.log(dateUsingString.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000)); // Converts into second

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})