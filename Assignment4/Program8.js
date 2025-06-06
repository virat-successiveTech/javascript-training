// 8. Write a program to remove dupliacte elements from an array

function removeDuplicates(arr)
{
    return [...new Set (arr)];
}
const arr = [2,3,4,5,6,4,3,2,4,5,7,8,9,6,3];
const uniqueArray = removeDuplicates(arr);
console.log("Array after the removal of the duplication  "+uniqueArray);