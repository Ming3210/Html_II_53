"use strict";
function myFilter(arr, value, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], value)) {
            result.push(arr[i]);
        }
    }
    console.log(result);
    return result;
}
let array = [1, 2, 3, 4, 5];
myFilter(array, 3, (element, value) => element === value);
