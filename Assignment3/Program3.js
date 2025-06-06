function pattern ()
{
    let num = parseInt(prompt("Enter the no of rows"));
    for(let i=1;i<=num;i++)
    {
        let str="";
        
        for(let j=1;j<=i;j++)
        {
            str+=i+" ";
     
        }
        console.log(str);

    }
}
pattern();