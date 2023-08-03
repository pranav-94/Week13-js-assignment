let a = prompt("Enter delivery type between Standard Express and Overnight: ");

switch (a) {
    case "Standard":
        console.log("Your package will get delivered in 3-5 days")
        break;
    
    case "Express":
        console.log("Your package will get delivered in 1-2 days")
        break;

    case "Overnight":
        console.log("Your package will get delivered in next day")
        break;

    default:
        console.log("Please enter correct data.")
}