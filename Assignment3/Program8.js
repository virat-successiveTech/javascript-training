
// Write a program to display the twice of a number starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096)
function Series()
{
    let a=2;
    let n=0;
    let i =1;
    let str=""
    while(n<4096)
    {
n=Math.pow(a,i);
str=str+n+" , ";
i=i+1;
    }
    console.log(str);
}

Series();