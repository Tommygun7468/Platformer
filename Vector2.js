//constructor for the vector2 object
var vector2 = function()
{
    this.x = 0;
    this.y = 0;
}

//set the components of the vector object
vector2.prototype.set = function(x, y)
{
    this.x = x;
    this.y = y;
}

//add two vectors together
vector2.prototype.add = function(otherVector)
{
        var newVector = new Vector2();
        newVector.set(this.x + otherVector.x, this.y + otherVector.y);
        return newVector;
}