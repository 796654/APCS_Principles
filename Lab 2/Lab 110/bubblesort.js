var data = [1, 2, 3, 4, 5, 6, 7, 8]
var millisecond = millis();
text('Milliseconds \nrunning: \n' + millisecond, 5, 40);


function bubbleSort(){

   for (var i = arr.length; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
// Swapping Code ++++++++++++++
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
// Swapping Code ++++++++++++++
     }
   }

}
