// 4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. 
// The class should also have a method called `fullName` that returns the person's full name.
// Additionally, the class should have a method called `averageAge` that takes in an array of 
// `Person` objects and returns the average age of all the people in the array.


class Person 
{
    constructor(firstName , lastName , age)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age=age;
    
    }
    fullName()
    {
        console.log("The full name is : "+this.firstName + " "+this.lastName);
    }
    static averageAge(arr)
    {
         return  arr.reduce((a,b)=>a+b.age ,0)/arr.length;
    }

}
const p1 = new Person("Virat","Tripathi",25);
const p2 = new Person("Adii","Singh",22);
const arr =[p1,p2];
const avg = Person.averageAge(arr);
p1.fullName();
p2.fullName();

console.log("The average is : "+avg);
