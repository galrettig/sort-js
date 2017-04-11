var Sort = require("./app.js");

var arrInvert = [30, 25, 20,15, 20,15 ,10,30];
var arrShuff = [30,2,6,1,0];

//console.log(Sort.BubbleSort(arr_test));
//console.log(Sort.Minimum(arrInvert,2));
//console.log(Sort.SelectionSort(arrInvert));
//console.log(Sort.SelectionSort(arrShuff));
//console.log(Sort.InsertionSort(arrInvert));
//console.log(Sort.InsertionSort(arrInvert));
console.log(Sort.MergeSort(arrInvert));
console.log(Sort.MergeSort(arrShuff));
