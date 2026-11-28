const products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

products.forEach((product) => {
    console.log(product)
})

products.forEach((product, index) => {
    console.log(index, product);
});

products.forEach((product, index) => {
    console.log(`Product ${index + 1}: ${product}`);
});