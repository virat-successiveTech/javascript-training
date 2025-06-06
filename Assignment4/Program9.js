// 9. Write a program to find the last duplicate index in an array

function findLastDuplicateIndex(arr)
{
    const seen = new Map();
    let lastDuplicateINdex = -1;
    for(let i=0 ; i<arr.length ; i++)
    {
        if(seen.has(arr[i]))
        {
            lastDuplicateINdex=i;
 
               }
            else
        seen.set(arr[i], i);
    
    }
    return lastDuplicateINdex;

}
const arr = [3,4,3,2,7,6,5,9,2];
const result =findLastDuplicateIndex(arr);
console.log("Last duplicate index : ",result);