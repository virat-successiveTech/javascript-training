// 2. Give an example of using multiple callback functions in a single function in JavaScript

function onComplete ()
{
    console.log("Processing finished");
}
function onSuccess(result)
{
    console.log("Result "+result );
}
function onError(err)
{
    console.log("Error "+err.message);
}
function onStart()
{
    console.log("Processing started");
}
function processData(onStart , onSuccess , onError , onComplete)
{
    onStart();
    setTimeout(
        function()
        {
            try{
                let data = "Heyy!!";
                if(!data)
                {
                    throw new Error("No data found ");
                }
                onSuccess(data);
            }
            catch(err)
            {
                onError(err);
            }
            finally{
                onComplete();
            }
        }
        ,1000
    );
}
processData(onStart,onSuccess,onError,onComplete);