// 10. Write a program to concatenate an input of array of arrays

function concateArrays(arr)
{
    return arr.flat()
}
const arr = [[1,2],[24,90],[21,13],[22,38]];
const result = concateArrays(arr);
console.log("The resulatant array after concatenation of arrays : "+result);