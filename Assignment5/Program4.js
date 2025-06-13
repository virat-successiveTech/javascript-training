// 4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.
 
//  To store the objects
const obj = {name : "Virat" , age : 25 , company : "Successive Digital"}

//new oject to have the deep copy of the object 
 var newObj = {};
 //functions that return deep clone of the eneterd obj 
function deepCopy(obj , newObj)
{

    for(var key in obj)
    {
        //to trace the objects within the objects or arrays as well 
        if(obj[key]==='object')
        {
            deepCopy(obj.newObj);
        }
        else{
        newObj[key] = obj[key];
    }}
    return newObj ; 
}

//calling of the function 
var newObj = deepCopy(obj,newObj);
//to print the keys and values in the deep clone 
for(var key in newObj )
{
    console.log(newObj[key]);
}

