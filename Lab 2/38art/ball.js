function Ball(location, velocity, radius, col){
  // Instance variables
  this.loc = location;
  this.vel = velocity;
  this.rad = radius;
  this.col = col;
  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
  // This function changes the location of the ball
  // by adding speed to x and y
  this.update = function(){
    if(this != b1){
      var d = this.loc.dist(b1.loc)
      if(d<450){
        var attForce = p5.Vector.sub(b1.loc, this.loc);
        attForce.normalize();
        attForce.mult(.0001);
        this.vel.add(attForce)
      }
      if(d < 85){
        var repForce = p5.Vector.sub(this.loc, b1.loc);
        repForce.normalize();
        repForce.mult(.5);
        this.vel.add(repForce)
      }
    } else{

    }

    this.vel.limit(3);
    this.loc.add(this.vel);
  }

  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x
    if(this.loc.x >width) this.vel.x = -this.vel.x
    if(this.loc.y < 0) this.vel.y = -this.vel.y
    if(this.loc.y > height) this.vel.y = -this.vel.y
  }
  this.render = function(){
    fill(this.col);
   ellipse(this.loc.x, 400, 30+this.loc.x)

  }
}
