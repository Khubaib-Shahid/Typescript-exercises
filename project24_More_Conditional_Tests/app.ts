import { log } from "console";

let str : string = "Sohan";

//  string equality
console.log(str === "Sohan");  // true

console.log(str === "something else");  // false

//  string inequality
console.log(str !== "something else");  // true  

console.log(str !== "Sohan");  // false

//  string equality with lower case function
console.log(str.toLowerCase() === "sohan"); // true

console.log(str.toLowerCase() === "Sohan"); // false

let num = 5;

//  number equality
console.log(num === 5); // true

console.log(num === 2); // false

//  number inequality
console.log(num !== 10);  // true

console.log(num !== 5);  // false

// greater than 
console.log(num > 2);  // true

console.log(num > 10); // false

// less than 
console.log(num < 8); // true

console.log(num < 3); // false

// greater than and equal to 
console.log(num >= 4); // true

console.log(num >= 7); // false

// less than and equal to
console.log(num <= 6); // true

console.log(num <= 3); // false

//  and operator
console.log(num === 5 && num > 2); // true

console.log(num === 5 && num > 6); // false

//  or operator
console.log(num === 5 || num === 2); // true

console.log(num === 3 || num === 1); // false

//  array

let arr : string[] = ["sohan", "moiz", "zubair", "hassan"];

console.log(arr.includes("moiz")); // true

console.log(arr.includes("furqan")); // false

console.log(!arr.includes("bilawal")); // true

console.log(!arr.includes("hassan")); // false

