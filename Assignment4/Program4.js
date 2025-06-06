// 4. Write a program to convert given string to upperCase OR lowerCase

function changeToUpper(str)
{
    let result = str.toUpperCase();
    return result;
}
function changeToLower(str)
{
    let result = str.toLowerCase();
    return result ;
}

let str = "Hello World";
console.log("Changed into lower case : " +changeToLower(str));
console.log("Changed into upper case : " +changeToUpper(str));