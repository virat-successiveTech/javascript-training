// 3.2 Create a class Student that inherits from the Person class and has a property studies. 
// Override the greeting() method to include information about what the student is studying.

const Person = require ('./Program3.1')

class Student extends Person 
{
    constructor(name="Virat",studies)
    {
        super(name);
        this.studies = studies;
    }
    greeting()
    {
        console.log("Heyy !! "+"I am "+this.name + " and I am studying "+this.studies);
    }
}
const stu = new Student("Physics");
stu.greeting();