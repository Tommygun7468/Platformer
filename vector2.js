
var Vector2 = function(){
    this.x = 0;
    this.y = 0;
}

Vector2.prototype.cop = function() {
    var newVector = new Vector2();
    newVector.x = this.x;
    newVector.y = this.y;
    return newVector;
}

Vector2.prototype.set = function(x, y){
    this.x = x;
    this.y = y;
}

Vector2.prototype.add = function(v2) {
    this.x += v2.x;
    this.y += v2.y;
}

Vector2.prototype.subtract = function(v3) {
    this.x -= v3.x;
    this.y -= v3.y;
}

Vector2.prototype.multiplyScalar = function(v4) {
    this.x *= v4.x;
    this.y *= v4.y;
}