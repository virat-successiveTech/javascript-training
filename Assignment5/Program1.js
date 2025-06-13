// 1. Write a program to iterate over object.

// Object to store the information 
const obj = {
    name : "Virat",
    surname : "Tripathi",
    age : 25 ,
    company : "Successive Digital"
}

//loop to iterate over the object 
for(const ele in obj)
{
    //to print the element along with its keys and values respectively 
    console.log(ele +" = " +obj[ele]);
}