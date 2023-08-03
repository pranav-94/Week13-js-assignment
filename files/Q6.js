let Name = prompt("Enter your name: ");
let age = prompt("Enter your age: ")
let email = prompt("Enter your email: ")
if(typeof Name !== "string"){
    console.log("Name should be in alphabets...");
}
if(typeof age !== 'number' || isNaN(age)){
    console.log("age should be in numbers...");
}
if(typeof email !== "string"){
    console.log("email should be in alphabets...");
}
else{
    alert("All information filled correctly.")
}