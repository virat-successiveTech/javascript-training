// Find Error in below questions and rectify them

function Person(name, age) { this.name = name; this.age = age; }
var person = new Person("John Doe", 30);    //NEW keyword was missing in this line .
console.log(person.name);