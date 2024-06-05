"use strict";
function checkCondition(condition, callback) {
    let result = condition();
    callback(result);
}
function displayResult(result) {
    console.log(result);
    return result;
}
function con() {
    const number = 5;
    return number > 10;
}
checkCondition(con, displayResult);
