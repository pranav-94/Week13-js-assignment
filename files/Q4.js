let a = prompt("Enter Child's ticket numbers: ")
let b = prompt("Enter Adult's ticket numbers: ")
let c = prompt("Enter Senior's ticket numbers: ")

priceOfa = a*100
priceOfb = b*150
priceOfc = c*120

let TotalPrice = priceOfa + priceOfb + priceOfc;

console.log("The total price of tickets is: ",TotalPrice);


