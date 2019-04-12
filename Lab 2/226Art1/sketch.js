//  Global variables
var b1;
var balls = [];
var toggle=true;
//setup code
function setup() {
  var cnv = createCanvas(1200, 1200);
  cnv.position((windowWidth-width)/2, 30);
  //background(20,20,20);

  b1= new Ball(createVector(width/2, height/2), createVector(5,1),
  25,
  color(255,5,23));
  loadBalls(12);
  pixelDensity(1);
 ellipse(width / 2, height / 2, 50, 50);

}

function draw() {
  if(toggle){
  //background(20,20,20);
  b1.run();
  for(var i=0; i< balls.length; i++){
  balls[i].run();
  }
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

      let img;
      function preload() {
        img = loadImage('assets/bricks.jpg');
      }
      function setup() {
        tint(255, 153, 204); // Tint blue
        image(img, 0, 0);
        noTint(); // Disable tint
        image(img, 50, 0);
      }

      noStroke();
colorMode(RGB, 100);
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    stroke(i, j, 0);
    point(i, j);
    noFill();
colorMode(RGB, 25, 255, 55, 1);
//background(255);

strokeWeight(0.5);
stroke(25, 0, 10, 0.3);
ellipse(40, 40, 50, 50);
ellipse(50, 50, 40, 40);
  }
}

console.log(balls);
}
function mousepressed(){
  toggle=!toggle
}
