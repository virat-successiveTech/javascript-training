function getPost(callback)
{
    fetch('https://api.thecatapi.com/v1/images/search?limit=10') 
    
    .then(response => response.json())
    .then(function(data){
    callback(null,data);
    })
    .catch (function(error){
        callback(error,null);
});
}

function showResult(error , data)
{
    if(error)
    {
        console.log("Error",error);
    }
    else{
        console.log("Hello User your required Data : ",data);
    }
}
getPost(showResult);