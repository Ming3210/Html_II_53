"use strict";
function processArray(arr, callback) {
    for (const value of arr) {
        console.log(`Phần tử thứ: ${value}`);
    }
}
processArray([1, 2, 3, 4, 5], (num) => num);
