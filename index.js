const prompt = require("prompt-sync")();
const n1 = parseFloat(prompt("enetr the 1st number:"));
const operator = prompt("enter the operator:");
const n2 = parseFloat(prompt("enter the 2nd number:"));
if (operator === "+")
{
    console.log(n1 + n2);
    
}
else if (operator === "-")
{
    console.log(n1 - n2);
    
}
else if(operator === "*")
{
    console.log(n1 * n2);
    
}
else if(operator === "/")
{
    console.log(n1 / n2);
    
}
else
{
    console.log("invalid input::");
    
}