"use strict";
function myFind(arr, number, callback) {
    let result;
    callback(arr, number);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
myFind(numbers, 2, (arr, number) => {
    console.log(arr[+number - 1]);
});
