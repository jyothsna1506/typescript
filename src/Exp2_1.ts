// Program to demonstrate Functions in TypeScript

//Function with Parameters and Explicit Return Type
function add(a: number, b: number): number {
    return a + b;
}

//Function with Default Parameter
function greet(name: string = "Guest"): void {
    console.log("Welcome " + name);
}

//Function with Optional Parameter
function displayStudent(name: string, age?: number): void {
    if (age !== undefined) {
        console.log("Name: " + name + ", Age: " + age);
    } else {
        console.log("Name: " + name);
    }
}

//Function with Rest Parameters
function totalMarks(...marks: number[]): number {
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