/// Luke Rutherford

function Sqr(location, sidelength, col){
  this.loc = location;
  this.w = sidelength
  this.col = col


  this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, this.w, this.w)
  }

}