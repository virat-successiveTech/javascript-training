// 3. Convert a callback-based API to a Promise-based API (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })

setTimeout(()=>{
let promiseBased = new Promise((resolve , reject)=>{
    fetch('https://api.thecatapi.com/v1/images/search?limit=10') .then(response=>response.json())
    .then (data=>resolve(data))
    .catch(error=>reject(error));
})
promiseBased.then(data=>console.log(data))
.catch(msg=>console.log(msg));
},1000);