"use strict";
function displayNumbers(time, callback) {
    setTimeout(() => {
        callback(time);
    }, 1000);
    console.log(`Số thứ tự : ${time % 999}`);
    return time;
}
let number = 1000;
function increase(time) {
    time = time + number;
    displayNumbers(time, increase);
}
displayNumbers(1000, increase);
