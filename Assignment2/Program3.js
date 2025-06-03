// Write a function expression that takes in another function as an argument

let callback=()=>               //callback function that is to be called inside another function named abc 

{
    return "Hi , My name is Virat Tripathi "
}
 let abc= (callback,a)=>
{
    console.log(callback()+a);
}
abc(callback,"Take Care !!");