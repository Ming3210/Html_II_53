"use strict";
function delayedCallback(callback, delay) {
    let result;
    setTimeout(() => {
        result = callback();
        console.log(result);
    }, delay);
}
delayedCallback(() => {
    return "2s";
}, 2000);
