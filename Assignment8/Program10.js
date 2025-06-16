// Find Error in below questions and rectify them

function getData(callback) {
    setTimeout(function() { callback([1, 2, 3, 4, 5]); }, 1000);
 }
 getData(function(data) {
   for(let i = 0 ; i<data.length ; i++){
    console.log(data[i]);  //to get the data of the callback 
    // we have to iterate through callback and print it one by one 
   }
 });
 
 