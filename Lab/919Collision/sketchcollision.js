//  Global variables

var boids =[];//array
var chaser;
// put setup code here

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0,0,0);
  loadboid(24444);
  frameRate(60);
  chaser = new Ball(createVector(width/2, height/2), createVector(1,2), 25, color(255, 0, 0));
}

function draw() {
  background(20,20,20, 80);
  chaser.run();
  for(var i= 0; i<boids.length; i++){
    boids[i].run();
  }

  // loop splices every boid that isDead=true
  for(var i = boids.length - 1; i >=0 ;  i--){
    if(boids[i].isDead){
      boids.splice(i, 1);
    }

  }
}


function loadboid(numboid){

  for(i=50; i < numboid; i++){
    var loc = createVector(random(width), random(height));
    var vel = createVector(random(-3,3), random(-3,3));
    var radius=random(10,10);
    var col= color(random(1, 255), random(1, 255), random(1, 255));
    boids.push(new boid(loc, vel, radius, col));
  }
console.log(boids);
}
