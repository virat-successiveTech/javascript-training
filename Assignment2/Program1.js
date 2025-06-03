//Write a program to give a random output between 1 to 10 (AC: 2 simultaneous answers could not be same)

let lastNumber = null;
let newNumber = null;
function generateRandom()
{
    do{
         newNumber = Math.floor(Math.random() *10)+1;  //to store a random value between 1 to 10 
    }while(newNumber===lastNumber)                     //to check that the two number are not equal to each other 
    {
        lastNumber=newNumber;
        return newNumber;
    }
}

console.log(generateRandom());                         //function called 
console.log(generateRandom());

