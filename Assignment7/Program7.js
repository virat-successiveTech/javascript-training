function sum (){
    console.log(5+3);
}
function diff()
{
    console.log(5-3);
}
function mul()
{
   console.log(5*3);
}
function mod()
{
    console.log( 5%3);
}
function delay (ms)
{
    return new Promise (resolve => setTimeout(resolve,ms));
}


async function results(sum,diff,mul,mod,ms) {

    await delay(ms);
    sum();
    await delay(ms);
    diff();
    mul();
    await delay(ms);
    mod();

    
}

results(sum,diff,mul,mod,2000);