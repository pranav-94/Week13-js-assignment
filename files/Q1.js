let totalValue = prompt("Enter the total amount: ");
let discountPercentage = prompt("Enter discount percentage: ");

let disAmount = totalValue * (discountPercentage / 100);

let finaAmount = totalValue - disAmount;

console.log("The final price after discount is: "+finaAmount);
alert("The final price after discount is: "+finaAmount);