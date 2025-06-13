

const shape = require('./Program2Parent');

class Triangle extends shape
{
    getArea()
    {
        return (0.5*this.width*this.height);
    }

}
class Rectangle extends shape 
{
    getArea( )
    {
        return (this.width*this.height);
    }
}
const rec = new Rectangle(2,4);

console.log("The area of the rectangle is : "+rec.getArea());

const tri = new Triangle(3,4);

console.log("The area of triangle is : "+tri.getArea());

