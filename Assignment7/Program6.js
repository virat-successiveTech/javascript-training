// 6. Implement a function that returns a resolved Promise after a specified delay using async/await.

function delay (ms)
{
    return new Promise (resolve => setTimeout(resolve,ms));
}

async function waitAndResolve(ms) {

    await delay(ms);
    console.log( "Resolved after "+ms +" milliseconds .");
    
}

waitAndResolve(2000);