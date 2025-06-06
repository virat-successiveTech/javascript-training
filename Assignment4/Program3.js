
// 3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

function countCharacters(str)
{
    let count ={};

    for(let char of str)
    {
        count[char]=(count[char]||0)+1;

    }
    let result = '';
    for(let char in count )
    {
        result+=char+count[char];
    }
    return result;
}

let input = "abcdabcdbcdbc";
let output = countCharacters(input);
console.log(output);