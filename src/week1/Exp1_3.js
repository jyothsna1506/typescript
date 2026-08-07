let studentName = "Jyothsna";
let age = 20;
let isStudent = true;
let marks = [85, 90, 95];
function calculateAverage(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}
console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Marks:", marks);
let average = calculateAverage(marks[0], marks[1], marks[2]);
console.log("Average Marks:", average);
let city = "Hyderabad";
console.log("City:", city);
export {};