function boid(location, velocity, radius, col){
  this.loc=location;
  this.vel=velocity;
  this.rad=radius;
  this.col=col;
  this.acc = createVector(0,.1);
  this.isDead = false;

  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  //This function changes the location of the Ball
  //by adding speed to x and y
  this.update=function(){
var d = this.loc.dist(chaser.loc);
// distance that determines if the boid is dead
if(d<200){
  this.isDead = true;
}
if (d<275){
  var steeringForce = p5.Vector.sub(this.loc, chaser.loc);
  steeringForce.normalize();
  steeringForce.mult(.1);
  this.vel.add(steeringForce);
}
      this.loc.add(this.vel);
  }

  //checkEdges()reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  this.render = function (){
    fill(this.col);
    push() // push or save the current coord system into the stack
    translate(this.loc.x, this.loc.y);
    rotate(50);
    triangle(-5, 0, 5, 0, 0, -15);
pop()  //  pop or restore the coordianate system from the stack
  }

  }//  End of the Ball constructor
