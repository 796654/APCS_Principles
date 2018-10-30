//  Global variables
var b1;
var balls=[];
//var b2;
//var b3;
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  loadBalls(1);
  //b1 = new Ball(random(width), random(height),random(15, 35), color(255, 0, 0));
  //b2 = new Ball(random(width), random(height),random(15, 35), color(255, 255, 255));
  //b3 = new Ball(random(width), random(height),random(15, 35), color(0, 0, 255));
}

function loadBalls(number){
  for(var i=0; i<number; i=i+1){
    var h= random(height);
    var w= random(width);
    var rad = random(50, 50);
    b1= new Ball(w, h, rad, color(250, 125, 0));
    balls.push(b1);
  }
}

function draw() {
  for(var i=0; i<balls.length; i=i+1){
    balls[i].run();
  }
  //b2.run();
  //b3.run();
}
