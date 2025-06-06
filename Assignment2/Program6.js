// Write a function expression that takes in a number and returns true if it's even and false if it's odd.
 
 let evenOdd=(a)=>
{
    if(a%2===0)            //Condition to check even odd
    {
        return "The Number is even";
    }
    else 
    return "The Number is odd ";
}
console.log(evenOdd(2));
console.log(evenOdd(7));