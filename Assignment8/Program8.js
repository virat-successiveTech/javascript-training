// Find Error in below questions and rectify them

function Person(name, age) { this.name = name; this.age = age; }
Person.prototype.getDetails = function() {
   console.log(this.name + " is " + this.age + " years old");
};
var person = new Person("John Doe", 30);
//delete person.name; I have  commented out this line because every 
// time the name gets deleted and will return undefined 
person.getDetails();