async function fetchData(url) {
    const response = await fetch(url);
    if(!response.ok)
    {
        throw new Error("Failed to fetch "+url + " : "+response.status);
    }
    return await response.json();
    
}
async function fetchMultipleAPIs(urls) {
    const fetchPromises = urls.map(url=>fetchData(url));
    try {
        const results = await Promise.all(fetchPromises);
        return results;
    }
    catch(error)
    {
        console.log("Error fetching the data "+error);
        return[];
    }
}
function processCombinedData(dataArray)
{
    const combined = dataArray.flat();
    console.log("Total number of elements = "+combined.length);
    console.log("The first element is : "+combined[0]);
}
async function main() {
    urls = ["https://api.github.com/users/hadley/orgs","https://api.github.com/users/hadley/repos"];
    const data = await fetchMultipleAPIs(urls);
    processCombinedData(data);
    
}
main();