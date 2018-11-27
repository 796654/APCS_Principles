//Luke Rutherford
//AP Comp Science Principals
//snake game

var w=20
var cols, rows;
var snake;

//set up function
function setup() {
  var cnv = createCanvas(800, 800);
  cols = width/w;
  rows = height/w;
  cnv.position((windowWidth-width)/2, 30);
  background(0, 0, 0);
  snake =new Snake(createVector(width/2, height/2), createVector(1,0));
}
//draw function
function draw() {
background(0, 0, 0,50);
snake.run();
}
//key control functions
function keyPressed(){
  text(keyCode, 50, 50)
  if(keyCode === UP_ARROW){
    snake.vel = createVector(0, -15);
    snake.loc.add(snake.vel);
  }

    if(keyCode === 40){
      snake.vel = createVector(0, 15);
      snake.loc.add(snake.vel);
    }

    if(keyCode === 37){
      snake.vel = createVector(-15, 0);
      snake.loc.add(snake.vel);
    }

    if(keyCode === 39){
      snake.vel = createVector(15, 0);
      snake.loc.add(snake.vel);
    }

}
