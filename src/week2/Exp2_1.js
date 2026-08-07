function add(a, b) {
    return a + b;
}
function greet(name = "Guest") {
    console.log("Welcome " + name);
}
function displayStudent(name, age) {
    if (age !== undefined) {
        console.log("Name: " + name + ", Age: " + age);
    }
    else {
        console.log("Name: " + name);
    }
}
function totalMarks(...marks) {
    let sum = 0;
    for (let mark of marks) {
        sum += mark;
    }
    return sum;
}
console.log("Addition =", add(10, 20));
greet("Jyothsna");
greet();
displayStudent("Jyothsna", 20);
displayStudent("Sai");
console.log("Total Marks =", totalMarks(85, 90, 95));
export {};
