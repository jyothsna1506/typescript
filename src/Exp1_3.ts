// Variable Annotations
let studentName: string = "Jyothsna";
let age: number = 20;
let isStudent: boolean = true;

// Array Annotation
let marks: number[] = [85, 90, 95];

// Function Parameter and Return Type Annotations
function calculateAverage(m1: number, m2: number, m3: number): number {
    return (m1 + m2 + m3) / 3;
}

// Using Annotated Variables and Functions
console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Marks:", marks);

let average: number = calculateAverage(
    marks[0]!,
    marks[1]!,
    marks[2]!
);

console.log("Average Marks:", average);

// Type Safety Check
let city: string = "Hyderabad";
console.log("City:", city);

// city = 100;      // Compile-time Error
// age = "Twenty";  // Compile-time Error