function pattern ()
{
    
    let num = parseInt(prompt("Enter the number of rows"));
    if( !isNaN(num))
    {
    let row =1;
    let col=1;
    for(let i=1;i<=num;i++)
    {
        let a="";
        for(let j=1 ; j<=i ;j++)
        {
            a+=(row++)+" ";
        }
        console.log(a);
    }
}
else{
    console.log("Error enter a number please ");
}
}
pattern();