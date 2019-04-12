//luke Rutherford
//Ettlin
//APCSP

var score = 0;
var balls = [];
//var chaser;
var mouseLoc;
var paddle;
var start = false;
var game = false;
var z;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  img = loadImage("balloonno.png")
  img2 = loadImage("hand-model-Hand_1_cut_out_by_Samphire_stock.png")
background(110, 70, 50);
text("your score" + score, 60, 60)
  paddle = new Paddle (createVector (width/2.5,height/1.5), createVector (-.1,.1), 200,15, color(255,0,255)); //creates paddle
   loadBalls(1);
}


function loadBalls (numBalls){ // loads all the balls in the array and create new ball objects for the array
  for (var i = 0; i < numBalls; i++){
    var loc = createVector(random(0,800), 20);
    var vel = createVector(random(-2,2), random(-2,2));
    var rad = 25;
    var col = color(random(0,255), random(0,255), random(0,255));
	var ball = new Ball (loc, vel,rad, col);
	balls.push(ball);
  }

}



//  The draw function is called @ 30 fps
function draw() {


  if(score === 5 && balls.length === 1){
    loadBalls(1);
  }
  if(score === 10 && balls.length === 2){
    loadBalls(1);
  }
  if(score === 15 && balls.length === 3){
    loadBalls(1);
  }

  if(start===false){
    fill(25,25,25);
    rect(200, 200, 400, 400);
    fill(150,25,230);
    rect(212, 212, 375, 375);
    fill(190,100,125);
    textSize(40);
    text("dont drop the balloon", 280, 400);
    fill(190,100,125);
    textSize(15);
    text("Click to Start", 280, 370);
}

if(start===false){
function mouseClicked() {
start=true
}
}


if(start===true){
background(20,20,20);
text(score, 50, 50);
noStroke ();
paddle.run ();
}

background(20,20,20);
// score text
text("score is " + score , 380, 50)
noStroke ();
paddle.run ();
for (var i = 0; i < balls.length; i++){
  balls[i].run();
  //balls bounce
  var ballA = balls[i];
  var y = ballA.loc.y;
  var x = ballA.loc.x;
  //distance bt pad and ball
  var distY = abs (paddle.loc.y- y);
  //distance of paddle ends
  //if ((distY <40) && (x>paddle.loc.x) && (x<paddle.loc.x+200)){ // allows ball to bounce off of paddle but we dont want this
   //ballA.vel.y = -ballA.vel.y;
   game = true
    start = false
 }
    var lowerEdge = paddle.loc.y + paddle.l ;//lower left paddle y coord value
    var upperEdge = paddle.loc.y //upper paddle value
    var lEdge = paddle.loc.x ; // paddle left edge x value
    var rEdge = paddle.loc.x + paddle.w ; //right edge x value\
    if ((x > lEdge) && (x < rEdge) &&  (y < lowerEdge) &&  (y > upperEdge) && (ballA.vel.y > 0)){
      //fix to find if ball a is between avalue and a value and if y is between something and something.
     //balls.splice(i,1);
     //score if ball touches paddle
        ballA.vel.y = -ballA.vel.y;
      score = score + 1;
      z = z + 10
    }
    } // boundaries
  //  if ((x > lEdge) && (x < rEdge) &&  (y < lowerEdge) &&  (y > upperEdge) && (ballA.vel.y < 0)){
  //    var numBalls = balls.length + 0;
  //    balls = [];
  //    loadBalls(numBalls);
  //    for (var i = 0; i < balls.length; i++){
  //      balls.run


      if(game===true){

    fill(25,25,25);
    rect(200, 200, 400, 400);
    fill(150,25,230);
    rect(212, 212, 375, 375);
    fill(190,100,125);
    textSize(30);
    text("Ctrl + R to restart", 280, 400);
    fill(190,100,125);
    textSize(15);
    text("You Lost", 280, 370);

        }

        function Score(){
          if (score > 3){
            fill(255, 30, 53);
            text("you won big guy", 400, 400);
          }
        }

        function gameStart(){
          if(ballA.status == "true"){
            textFont()
            fill(0, 0, 0);
            textAlign(CENTER);
            textSize(100);
            text("dont drop the balloon", 400, 300)
            textSize(40);
            text("type every letter on the keyboard to start", 400, 550)
            fill(255,255,51);
          }
        }



        this.update = function(){
          for(var i = this.ballA.loc - 1; i >= 0; i--){
            if(i > 0){
              this.ballA.loc[i].x = this.ballA.loc[i-1].x;
              this.ballA.loc[i].y = this.ballA.loc[i-1].y;
            }else{
            this.ballA.loc[0].x = this.loc.x;
            this.ballA.loc[0].y = this.loc.y;
            }
          }
          this.loc.add(this.vel);
          this.loc.x = constrain(this.loc.x, 0, 800-20)
          this.loc.y = constrain(this.loc.y, 0, 800-20)
        }
