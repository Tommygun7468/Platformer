var Player = function()
{
	this.image = document.createElement("img");
	
	this.width = 159;
	this.height = 163;


	this.falling = true;
	this.jumping = false;
	
	this.image.src = "hero.png"; 

};

Player.prototype.update = function(deltaTime)
{
	var left = false;
	var right = false;
	var jump = false;
	
	// check keypress events
	if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true) {
		left = true;
	}
	if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true) {
		right = true;
	}
	if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true) {
		jump = true;
	}

	var falling = this.falling;
	var ddx = 0; // acceleration

	if (left)
		ddx = ddx - ACCEL; // player wants to go left
	 
	if (right)
		ddx = ddx + ACCEL; // player wants to go right
	 
	if (jump && !this.jumping && !falling)
	{
		ddy = ddy - JUMP; // apply an instantaneous (large) vertical impulse
		this.jumping = true;
	}
	 
	 // calculate the new position and velocity:

	
		
    // collision detection
	// Our collision detection logic is greatly simplified by the fact that the
	// player is a rectangle and is exactly the same size as a single tile.
	// So we know that the player can only ever occupy 1, 2 or 4 cells.

	// This means we can short-circuit and avoid building a general purpose
	// collision detection engine by simply looking at the 1 to 4 cells that
	// the player occupies:

	// If the player has vertical velocity, then check to see if they have hit a platform
	// below or above, in which case, stop their vertical velocity, and clamp their
	// y position:
}


Player.prototype.draw = function()
{
    context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        context.drawImage(this.image, -this.width/2, -this.height/2);
    context.restore();
}