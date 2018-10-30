
var b1;
var b2;
var b3;

//  setup code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  b1 = new Ball(random(width), random(height),random(15, 35), color(99, 200, 69));
  b2 = new Ball(random(width), random(height),random(15, 35), color(255, 236, 33));
  b3 = new Ball(random(width), random(height),random(15, 35), color(250, 200, 200));
}

for(var=i=o; i<12 i=i+1){
var balls=[]
var b=new Ball (x, y, dx, dy, 12)
balls.push(b)
balls.push(b1);//add b1 to array of balls
console.log(balls)
}
balls[i].run()

function draw() {
  b1.run();
    b2.run();
      b3.run();
}
