"use strict";
function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 dc thuc thi");
        callback();
    }, 1000);
}
function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 dc thuc thi");
        // callback();
    }, 1500);
}
function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 dc thuc thi!Hoan thanh");
        callback();
    }, 2000);
}
function task() {
    task1(() => {
        task2(() => {
            task3(() => {
            });
        });
    });
}
task();
