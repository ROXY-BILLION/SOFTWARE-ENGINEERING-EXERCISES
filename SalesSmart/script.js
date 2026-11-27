const product = "Shoe";
const quantity = 15;
const price = 100000;

const subtotal = quantity * price;

const discount = subtotal >= 100000
    ? subtotal * 0.10
    : 0;

const finalAmount = subtotal - discount;

const customerStatus = finalAmount >= 75000
    ? "Eligible for free delivery"
    : "Ineligible for free delivery";

console.log("Product:", product);
console.log("Quantity:", quantity);
console.log("Subtotal:", subtotal);
console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);
console.log("Delivery:", customerStatus);