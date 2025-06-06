// 6. Write a program to find sum of an array

function sumOfArray(arr) {
  let len = arr.length;
  let i = 0;
  let sum = 0;

  while (i < len) {
    if (!isNaN(arr[i])) {
      sum += arr[i];
      i++;
    } else return "Error !! There should be only numbers entered in the array ";
  }
  return sum;
}
let input = [2, 3, 4, 5, 6, "abc"];
let output = sumOfArray(input);
console.log("The resultant is : " + output);
