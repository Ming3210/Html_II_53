"use strict";
function myForEach(arr, callback) {
    for (const value in arr) {
        callback(value, arr[value], arr);
    }
}
const subArr = [1, 2, 3, 4, 5];
myForEach(subArr, (element, index, arr) => {
    console.log(`Vi tri: ${element} | Phan tu: ${index} | Mang: ${arr}`);
});
