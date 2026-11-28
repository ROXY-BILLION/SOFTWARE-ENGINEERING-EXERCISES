const numbers = [5, 10, 15, 20, 25, 30];

const filterNumber = numbers.filter((number) => {
    return number > 15;
})

const filterNum = numbers.filter((number) => {
    return number < 20;
})

const findNumber = numbers.find((number) => {
    return number > 15;
})

console.log(filterNumber);
console.log(filterNum);
console.log(findNumber);