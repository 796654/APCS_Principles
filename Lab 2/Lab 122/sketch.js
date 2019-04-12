//Luke rutherford
// data sort

var data;
var barHeight;

function preload(){
  //loading the json data
    loadJSON("population.json", gotData);
}


function setup(){
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(20);
  barHeight=50;
  textFont();
  fill(0,255,60);
  textAlign(CENTER);
  textSize(25);
  text("up arrow for females(orange).  down arrow for males(red)",400,400)
  fill(255, 0, 0);

}
function draw(){
  //useData();
  //calling functions
  sortingMales();
  sortingFemales();
}



function gotData(dataNew){
  data = dataNew;

}
//sorts the number of males from each country
function BubbleSort(){
  var length = data.countrydata.length;
  for(var i = length - 1; i >= 0; i-- ){
    for(var j = 0; j < i; j++ ){
      if (data.countrydata[i].males < data.countrydata[j].males){
        var temp = data.countrydata[i];
        data.countrydata[i] = data.countrydata[j];
        data.countrydata[j] = temp
    }
  }
  console.log("BubbleSort")
  console.log(data);  //logs the new sorted array
}
  }

//sorts the number of females
function insertionSort(){
  for(var i = 1; i<data.countrydata.length;i++){
    for(var j = i; j>0;j--){
      if(data.countrydata[j].females<data.countrydata[j-1].females){
        var temp = data.countrydata[j];
        data.countrydata[j]=data.countrydata[j-1];
        data.countrydata[j-1]=temp;
      }
    }

  }
  console.log("InsertionSort")
  console.log(data) //logs the new sorted array
}
//visual representation
//creates graph for each country based on females
function sortingFemales(){
  if(keyCode===UP_ARROW){
    insertionSort();
    for(i=0;i<data.countrydata.length;i++){
      fill(255,0,0)
      stroke(255,193,51)
      strokeWeight(0.6);
      rect(i,5,2000,data.countrydata[i].females/200)
    }
  }
}
//visual representation
//creates graph for each country based on males
function sortingMales(){
  if(keyCode===DOWN_ARROW){
    BubbleSort();
    for(i=0;i<data.countrydata.length;i++){
      fill(255,0,0)
      stroke(255,0,0)
      strokeWeight(11);
      rect(i,5,200,data.countrydata[i].males/250)
    }
}
}
