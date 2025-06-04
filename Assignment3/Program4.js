

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function pattern ()
{
    
    for(let i=5;i>=1;i--)
    {
        let str="";
        
        for(let j=1;j<=i;j++)
        {
            str+=j;
     
        }
        console.log(str+" ");

    }
    for(let i=2 ; i<=5;i++)
    {
        let str="";
        for(let j=1 ; j<=i;j++)
        {
            str+=j;

        }
        console.log(str+" ");
    }
}
pattern();