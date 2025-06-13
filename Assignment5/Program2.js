// 2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})

function sortByAge(arr , order )
{
    if(!Array.isArray(arr))
    {
        throw new Error("Input must be an aray");
    }
    
        if(order=="asc")
        {
            
            for (let i = 0; i<arr.length - 1; i++){
                for(let j = 0; j< arr.length - 1 - i; j++){
                    if (arr[j].age > arr[j+1].age){
                        let temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                    }
                }
            }
            return arr;
        }
        else if(order =="desc")
        {
            console.log("here");
            for (let i = 0; i<arr.length - 1; i++){
                for(let j = 0; j< arr.length - 1 - i; j++){
                    if (arr[j].age < arr[j+1].age){
                        let temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                    }
                }
            }
            return arr;
        }
        else{
            throw new Error("Order must be 'asc' or 'desc' ");
        }console.log("here");
    }


const arr = [{name:"Virat",age:25},{name:"Mannat",age:22},{name:"Aditi",age:24}];
console.log("Ascending");
console.log(sortByAge(arr,"asc"));
console.log("Descending")
console.log(sortByAge(arr,"desc"));


//Changes done 