 // 2. Create a class Shape with properties width and height and methods getArea(). 
// Create two classes Rectangle and Triangle that inherit from the Shape class and implement
//  the getArea() method for their respective shapes.
 
 class shape 
{
    constructor (height , width)
    {
        this.height=height;
        this.width=width;
    }
    getArea(width,height)
    {
        throw newError ( " getARea must be implemented in the sub class ");

    }
}
module.exports = shape ;
