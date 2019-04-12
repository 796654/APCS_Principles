var data = [1, 2, 3, 4, 5, 6, 7, 8]
var millisecond = millis();
text('Milliseconds \nrunning: \n' + millisecond, 5, 40);

function selectionSort(items){
    var len = data.length,
        min;
    for (i=0; i < len; i++){
        //set minimum to this position
        min = i;
        //check the rest of the array to see if anything is smaller
        for (j=i+1; j < len; j++){
            if (items[j] < items[min]){
                min = j;
            }
        }
        //if the minimum isn't in the position, swap it
        if (i != min){
            swap(items, i, min);
        }
    }

    return items;
}
