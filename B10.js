"use strict";
function myFindIndex(arr, value, callback) {
    let result;
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], value)) {
            result = i;
            console.log(result);
            return result;
        }
    }
    result = -1;
    console.log(result);
    return result;
}
let subArr1 = [1, 2, 2, 1, 5, 9, 3, 3, 4, 5, 6, 7];
myFindIndex(subArr1, 3, (element, value) => element === value);
