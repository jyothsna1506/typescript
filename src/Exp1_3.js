"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Variable Annotations
let studentName = "Jyothsna";
let age = 20;
let isStudent = true;
// Array Annotation
let marks = [85, 90, 95];
// Function Parameter and Return Type Annotations
function calculateAverage(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}
// Using Annotated Variables and Functions
console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Marks:", marks);
let average = calculateAverage(marks[0], marks[1], marks[2]);
console.log("Average Marks:", average);
// Type Safety Check
let city = "Hyderabad";
console.log("City:", city);
// city = 100;      // Compile-time Error
// age = "Twenty";  // Compile-time Error
//# sourceMappingURL=Exp1_3.js.map