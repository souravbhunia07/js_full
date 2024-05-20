// Declaring constant
const accountId = 143909342394;

// Declaring variable
let accountEmail = "admin@gmail.com" // It is mostly used
/* 
Prefer not to use var
Because of issue in block scope and functional scope
*/
var accountPassword = "12345"
accountCity = "Jaipur" // It is also possible

let accountState;  // It will give undefined

// accountId = 2  // Not allowed
// console.log(accountId); // Assignment to constant variable.

accountEmail = "root@gmail.com"
accountPassword = "13231232"
accountCity = "Bengaluru"

// Give output in tabular structure
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);