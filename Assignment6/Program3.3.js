// 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught.
//  Override the farewell() method to include information about what the teacher teaches.

const Person = require('./Program3.1');
class Teacher extends Person
{
    constructor(name,subjectTaught)
    {
        super(name);
        this.subjectTaught = subjectTaught;
        
    }
    farewell()
    {
        console.log("Bye Bye !! "+this.name + " The techer teaches me : "+this.subjectTaught);
    }
}
const tea = new Teacher("Virat","Mathematics");
tea.farewell();