/**
 * Created by galrettig on 4/10/17.
 */

var Sort = {};
Sort.cmp_more_then = function(v0,v1){
    if(v0 > v1) {
        return 1;
    } else if(v0 < v1){
        return -1;
    }
    return 0;
};

Sort.setCompare = function(cb){
    if(cb){
        this.comparer = cb;
    } else {
        this.comparer = this.cmp_more_then;
    }
};


Sort.BubbleSort = function(arr){
    var swap;
    var bubble_steps = 0;
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length - i - 1; j++){
            bubble_steps ++;
            if(arr[j] > arr [j + 1]){
                swap = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = swap;
            }
        }
    }
    console.log(bubble_steps);
    return arr;
};


Sort.SelectionSort = function (arr) {

    for(var i = 0; i < arr.length; i++){
        var smallest = this.Minimum(arr,i);
        var swap = arr[smallest];
        arr[smallest] = arr[i];
        arr[i] = swap;
    }
    return arr;
};


Sort.Minimum = function (arr, startIndex) {
    startIndex = startIndex ? startIndex : 0;
    var smallest_index = startIndex;
    for(var i = startIndex + 1; i < arr.length; i++){
        if(arr[smallest_index] > arr[i]){
            smallest_index = i;
        }
    }
    return smallest_index;
};

Sort.InsertionSort = function(arr){
    for(var i = 1; i < arr.length; i++){
        var current = arr[i];
        var j = i;
        console.log(arr[j - 1] + " > " + current + " ? " + (arr[j - 1] > current) + " [" + arr + "] ");
        while(j > 0 && arr[j - 1] > current){
            arr[j] = arr[j-  1];
            j--;
        }
        arr[j] = current;
    }
    return arr;
};

Sort.MergeSort = function (arr) {
    if(arr.length < 2) {
        return arr;
    }
    var middle = arr.length % 2 == 0 ? arr.length / 2 : (arr.length + 1) / 2;
    var left_side = arr.slice(0, middle);
    var right_side = arr.slice(middle);

    var merge = function(arr0, arr1){
        var merged = [];
        while(arr0.length > 0 && arr1.length > 0){
            var min;
            if(arr0[0] < arr1[0]){
                min = arr0.shift();
                merged.push(min);
            } else {
                min = arr1.shift();
                merged.push(min);
            }
        }

        if(arr0.length){
            merged = merged.concat(arr0);
        } else {
            merged = merged.concat(arr1);
        }
        return merged;

    };

    return merge(this.MergeSort(left_side), this.MergeSort(right_side));

};

module.exports = Sort;