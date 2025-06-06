// 13. Write a program to return inverse of an array

function inverseArray (arr)
{
    let n = arr.length;
    let inv = new Array(n);

    for(let i=0 ; i<n ; i++)
    {
        inv[arr[i]]=i;
    }
    return inv;
}
let arr =[2,0,1];
let inv = inverseArray(arr);
console.log("Inverse Array ",inv);