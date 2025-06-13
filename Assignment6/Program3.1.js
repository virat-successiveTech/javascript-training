// 3.1 Create a class Person with properties name, age, gender, and interests. 
// Add a method greeting() that returns a string introducing the person. 
// Also add a method farewell() that returns a string saying goodbye to the person.

class Person 
{
    constructor (name , age , gender , interests)
    {
        this.name = name ;
        this.age = age ;
        this.gender = gender;
        this.interests = interests;

    }
    greeting()
    {
        console.log("Heyy!! "+ "I am "+this.name + " I am "+this.age +" years old"+"My Gender is :" +this.gender);
    }
    farewell()
    {
        console.log("Bye Bye !! "+this.name);
    }
}
const per = new Person("Virat",23,"male","Physics");
per.greeting();

module.exports = Person ;