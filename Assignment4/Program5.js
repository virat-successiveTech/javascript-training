// 5. Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

function toCamelCase(str)
{
  let str2 = str.trim();
  let len = str2.length;

  let result = "";

  let i=0 ; 
  while (i<len) {
      if(str2[i]===" ")
      {
          result = result+str2[i+1].toUpperCase();
          i=i+2;
      }
      else{
      result = result+str2[i];
  i++;
  }}
  return result;

}

let input = "hello john doe";
let output = toCamelCase(input);
console.log("After Camel case conversion : "+output);