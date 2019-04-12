function Paddle (loc, vel, width,length,col){
  this.loc = loc;
  this.vel = vel;
  this.w = width;
  this.l = length;
  this.col = col;


  // This function calls other functions
  this.run = function(){ //FUNCTIONS to run all
    this.checkEdges();
    this.update();
    this.render();
  }
  // changes location of the paddle //
  //  adds lerp too
  this.update = function(){ //attraction
    paddleLength = width/1.5
      this.loc.x = lerp (this.loc.x, mouseX-paddleLength,.1);
    }

  //checkEdges() resets speed when  boidtouches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y; 
  }

  // render() draws the ball dat  new location
  this.render = function(){
    //draw paddle
    fill(255,255,5);
    image(img2,this.loc.x, this.loc.y, 99, 50);
  }

}
