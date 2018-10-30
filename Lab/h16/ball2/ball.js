
function Ball(locX, locY, rad, col){
  // Instance variables
  this.locX = locX;
  this.locY = locY;
  this.speedX = random(-3.0, 3.0);
  this.speedY = random(-3.0, 3.0);
  this.rad = rad;
  this.col = col;
  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  this.update = function(){
    this.locX = this.locX + this.speedX;
    this.locY = this.locY + this.speedY;
  }
var balls=[]
var b=new Ball (x, y, dx, dy, 12)
balls.push(b)
balls.push(b1);//add b1 to array of balls
console.log(balls)

  this.checkEdges = function(){
    if(this.locX < 0) this.speedX = -this.speedX;
    if(this.locX > width) this.speedX = -this.speedX;
    if(this.locY < 0) this.speedY = -this.speedY;
    if(this.locY > height) this.speedY = -this.speedY;
  }
  // render() draws the ball at the new location
  this.render = function(){
    fill(this.col);
    ellipse(this.locX, this.locY, rad, rad);

  }
}
