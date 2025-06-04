// Write a program to print fibonaaci series



let n=10;
let a=0;
let b=1;

console.log("Fibonacci Series");
let str = "0,1,";

for(let i=0 ; i<n ; i++)
{
    
    let c= a+b;
    str+=c+",";
    a=b;
    b=c;
}
console.log(str);

