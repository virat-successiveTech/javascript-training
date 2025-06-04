// 4. Write a program to print all even number first and then all odd numbers
// 5. Write a program to print all even number first and then all odd numbers using only one iteration

function pattern ()
{
    let num = parseInt(prompt("Enter the limit till you want the even and odds separately"));
    stre="";
    stro="";
    for(let i = 1 ; i<=num;i++)
    {
        if(i%2==0)
            stre+=i+" ";
        else
        stro+=i+" ";
    }
    console.log("Evens are : \n "+stre);
    console.log("odds are: \n"+stro);

}
pattern();