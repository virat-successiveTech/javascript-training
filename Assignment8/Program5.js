// Find Error in below questions and rectify them

let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
   console.log(myArray[i]);
}

let myNumber = myArray[3];   
//the number entered in myArray[number] , 
// the number should be less then length as indexing starts from 0 and goes to length-1 
// and it should be greater or equal to zero for the same               
if (myNumber) {
   console.log('The number is: ' + myNumber);
} else {
   console.log('The number is undefined');
}