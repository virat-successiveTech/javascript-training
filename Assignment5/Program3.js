

const obj  = [{name : "John" , age : 23 , id:"1"},
    {name : "Doe" , age : 25 , id:"3"},
    {name : "Luv" , age : 28 , id:"2"},
    {name : "John" , age : 29 , id:"14"}
]

//loop to iterate over the objets and delete the field id at every instance 

for(const ele of obj)
{
    delete ele.id ; 
}

// After deletion the id is undefing when called 

for(const ele2 of obj)
{
    console.log("Name : " +ele2.name + " , "+ "Age : "+ " , "+ ele2.age +  " , " + "Id : "+ ele2.id);
}