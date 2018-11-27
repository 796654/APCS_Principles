function Snake(loc, vel){

  this.loc = loc; //vector for location of the front
  this.vel = vel; //vector for the speed
//run function, update function and render function
  this.run = function(){
    this.update();
    this.render();
   }

// function for vel, height and width
  this.update = function(){
    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, width-w);
    this.loc.y = constrain(this.loc.y, 0, height-w);
  }

  this.render = function(){
    fill(0,255,0)
    rect(this.loc.x, this.loc.y, w, w)
  }
//end of constructor function


}
