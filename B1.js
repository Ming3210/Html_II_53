"use strict";
function calculate(num1, num2, callback) {
    let result;
    result = callback(num1, num2);
    return result;
}
function add(num1, num2) {
    return num1 + num2;
}
console.log(calculate(2, 4, add));
