"use strict";
// Program to demonstrate Functions in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
//Function with Parameters and Explicit Return Type
function add(a, b) {
    return a + b;
}
//Function with Default Parameter
function greet(name = "Guest") {
    console.log("Welcome " + name);
}
//Function with Optional Parameter
function displayStudent(name, age) {
    if (age !== undefined) {
        console.log("Name: " + name + ", Age: " + age);
    }
    else {
        console.log("Name: " + name);
    }
}
//Function with Rest Parameters
function totalMarks(...marks) {
    let sum = 0;
    for (let mark of marks) {
        sum += mark;
    }
    return sum;
}
//Function Calls
console.log("Addition =", add(10, 20));
greet("Jyothsna");
greet();
displayStudent("Jyothsna", 20);
displayStudent("Sai");
console.log("Total Marks =", totalMarks(85, 90, 95));
//# sourceMappingURL=Exp2_1.js.map