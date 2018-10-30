//  Global variables
var b1;
var balls = [];

//setup code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);

  b1= new Ball(createVector(width/2, height/2), createVector(5,1),
  25,
  color(255,5,23));
  loadBalls(666);
}

function draw() {
  background(20,20,20);
  b1.run();
  for(var i=0; i< balls.length; i++){
  balls[i].run();
  }
}

function loadBalls(numBalls){

    for(var i = 0; i < numBalls; i++){
        var loc = createVector(random(width), random(height));
        var vel = createVector(random(-3,3), random(-3,3));
        var radius = random(3,15);
        var col = color(random(254), random(46), random(70));
        balls.push(new Ball(loc, vel, radius, col));


      }
console.log(balls);
}
