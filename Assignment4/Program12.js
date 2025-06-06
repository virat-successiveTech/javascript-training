// 12. Write a program to display intersection of two array

function arrayIntersection (arr1,arr2)
{
    let set1 = new Set(arr1);
    let intersection = [];
    for(let num of arr2)
    {
        if(set1.has(num))
        {
            intersection.push(num);
            set1.delete(num);
        }
    }
    return intersection;
}

let Arr1 = [1,2,3,4,2,4,5,7,9];
let Arr2 = [5,3,2,4,6,7,8,9,4,1];
console.log("Intersesction of arrays " +arrayIntersection(Arr1,Arr2));