// 2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})

const arr = [{name : "Virat",age : 25},{name : "Divyanshu",age : 29},{name : "Parth" , age : 23}];
//object arr to store the objects


arr.sort((a,b)=>a.age - b.age);

//sort function to sort the ages of the stored objects 

console.log(arr);