const flattenedObject = (prev , obj , ans )=>
{
    for(let i in obj )
    {
        if(typeof(obj[i])=='object')
        {
            let str2 = prev+String(i)+'.';
            flattenedObject(str2,obj[i],ans);
        }
        else{
            let str = prev+String(i);
            ans[str]=obj[i];
        }
    }

}
let ans ={};
let obj ={
    a:1 , 
    b:{c:2,d:[3,4]}
};

flattenedObject("",obj,ans);
console.log(ans);