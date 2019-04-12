function Food(loc){
//location
  this.loc = loc;

  this.run = function(){
    this.render();
  }
//renders food
  this.render = function(){
    fill(255,25,255);
    stroke(255);
    rect(this.loc.x, this.loc.y, 20, 20);
    stroke(121, 139, 19);
  }

}
