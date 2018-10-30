

var squares = [];
var numberOfSquares = 8
var squareSize ;

function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  loadSquares(8);
  for(var i = 0; i < squares.length; i++){
    squareSize = width/numberOfSquares;
    squares[i].render();
  }
}

function loadSquares(siz){


for(var rowNum = 0; rowNum< siz; rowNum++){
var x = rowNum*100;
  var row = 100*rowNum
  for(var colNum = 0; colNum < siz; colNum++){
  var y = 100*colNum
  var loc = createVector (x,y)
  var c;
  if((rowNum+colNum) %2 == 0 ){
    c = color (4,0,0);
  }
  var s = new Sqr(loc, 100, color (25, 255, 255));
  squares.push(s);
  }

}
console.log(squares);
}
