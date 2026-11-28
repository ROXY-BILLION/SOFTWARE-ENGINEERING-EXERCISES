const numbers = [5, 10, 15, 20];

const multiply = numbers.map((number) => {
     return number * 2
})
console.log(multiply);

const addNumber = numbers.map((number) => {
    return number + 5;
})
console.log(addNumber);

const convertNumber = numbers.map((number) => {
    return `Number: ${number}`
}) 
console.log(convertNumber);