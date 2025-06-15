   
 async function getData() {
  //return await setTimeout(function() { return [1, 2, 3, 4, 5]; }, 1000); 
  return new Promise((resolve,reject)=>
{
    setTimeout(()=>  resolve ([1, 2, 3, 4, 5]), 1000); 
}
)
}
 getData().then(function(data) {
    console.log(data);
 });
 
 //for this problem promises would be a good approach as we want to print the object and its values that it holds 
 //that can be done when the data is resolved and the after calling it and taking it's console 