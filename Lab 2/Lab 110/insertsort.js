var data = [1, 2, 3, 4, 5, 6, 7, 8]
var millisecond = millis();
text('Milliseconds \nrunning: \n' + millisecond, 5, 40);


var temp;
      for (var  i = 1; i < arr.length; i++)
{
            for(var  j = i ; j > 0 ; j--)
            {
//  Swapping Code +++++++++
               if(arr[j] < arr[j-1]){
                  temp = arr[j];
                  arr[j] = arr[j-1];
                  arr[j-1] = temp;
                }
      //  Swapping Code +++++++++
            }
       }
