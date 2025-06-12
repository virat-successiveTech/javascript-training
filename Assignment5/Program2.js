// 2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})

function sortByAge(arr , order )
{
    if(!Array.isArray(arr))
    {
        throw new Error("Input must be an aray");
    }
    return arr.sort((a,b)=>{
        if(order=="asc")
        {
            return a.age - b.age ;
        }
        else if(order =="desc")
        {
            return b.age-a.age;
        }
        else{
            throw new Error("Order must be 'asc' or 'desc' ");
        }
    })
}

const people = [{name:"Virat",age:25},{name:"Mannat",age:22},{name:"Aditi",age:24}];
console.log("Ascending");
console.log(sortByAge(people,"asc"));
console.log("Descending")
console.log(sortByAge(people,"desc"));


//Changes done 