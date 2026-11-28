const products = ["Laptop", "Mouse", "Keyboard"];
const [first, second, third] = products;

console.log(first);
console.log(second);
console.log(third);


const numbers = [100, 200, 300, 400];
const [First, Second, , Fourth] = numbers;

console.log(First);
console.log(Second);
console.log(Fourth);


const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "MongoDB"];

const fullstack = [...frontend, ...backend];
console.log(fullstack);