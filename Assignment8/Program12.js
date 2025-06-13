   
 async function getData() {
  // return await setTimeout(function() { return [1, 2, 3, 4, 5]; }, 1000); 
  return new Promise((resolve,reject)=>
{
    setTimeout(()=>  resolve ([1, 2, 3, 4, 5]), 1000); 
}
)
}
 getData().then(function(data) {
    console.log(data);
 });
 
 