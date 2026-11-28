const numbers = [5, 10, 15, 20];

const sumNum = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

const productNumber = numbers.reduce((multiply, number) => {
    return multiply * number;
}, 1);

const sum = numbers.reduce((sum, number) => {
    return sum + number;
}, 100);

console.log(sumNum);
console.log(productNumber);
console.log(sum);