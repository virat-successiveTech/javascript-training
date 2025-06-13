// 5. Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
// const obj = {
//    a: 1,
//    b: { c: 2, d: [3, 4] }
// };
// Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }

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