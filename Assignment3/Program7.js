
//        *
//       *  *
//     *  *  *
//   *  *  *  *
//  *  *  *  *  *
//   *  *  *  *
//     *  *  *
//      *  *
//        *


function pattern()
{
    let num = 5;
    let rows=1;
    for(let i=1;i<=num;i++)
    {
        let a="";
        for (let j=1 ; j<=num-rows;j++)
        {
            a+=" ";
        }
        for(let k =num-rows;k<num;k++)
        {
            a+="* ";

        }
        rows++;
        console.log(a);
    }
    rows=1;
    for(let i=1 ; i<=num ; i++)
    {
        let a = "";
        for(let j=1 ; j<=rows ; j++)
        {
            a+=" ";

        }
        for(let k=1 ; k<=num-rows ; k++)
        {
            a+="* ";
        }
        rows ++;
        console.log(a);
    }
}
pattern();