function delay (ms)
{
    return new Promise (resolve => setTimeout(resolve,ms));
}

async function waitAndResolve(ms) {

    await delay(ms);
    console.log( "Resolved after "+ms +" milliseconds .");
    
}

waitAndResolve(2000);