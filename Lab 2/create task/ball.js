function Ball(loc, vel, rad, col){
  this.loc = loc;
 this.vel = vel;
   this.rad = rad;
   this.col = col;
 this.acc = createVector(0,.1);
 this.status= "false";




 // This function calls other functions
 this.run = function(){
   this.checkEdges();
   this.update();
   this.render();
 }
 // changes the location of the ball
 //  adds speed to x and y
  this.update = function(){
    this.loc.add(this.vel);
    this.vel.add(this.acc);
    this.loc.mag();
    this.loc.add(this.vel);
    //this.loc.x = constrain(this.loc.x, 0, 800-20)
    this.loc.y = constrain(this.loc.y, 0, 800-20)
    //if()(distX==0) && (distY == 0))
    this.status="true";
  //  console.log(this.ststus);
    }



  //checkEdges() reverses speed when  ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
   if(this.loc.x > width) this.vel.x = -this.vel.x;
   if(this.loc.y < 0) this.vel.y = -this.vel.y;
   //if(this.loc.y > height) this.vel.y = -this.vel.y; //balls.splice(i,1);
 }

  // render() draws the ball at  new location
 this.render = function(){
    fill(this.col);
    image(img,this.loc.x, this.loc.y,90,90);
 }
}
