function addTraditional(a: number, b: number): number {
    return a + b;
}
const addArrow = (a: number, b: number): number => {
    return a + b;
};
const multiply = (a: number, b: number): number => a * b;
let result1 = addTraditional(10, 20);
console.log("Traditional Function Result:", result1);
let result2 = addArrow(10, 20);
console.log("Arrow Function Result:", result2);
let result3 = multiply(10, 20);
console.log("Shorthand Arrow Function Result:", result3);
console.log("\nComparison:");
console.log("Traditional Function:", addTraditional(5, 5));
console.log("Arrow Function:", addArrow(5, 5));
console.log("Shorthand Arrow Function:", multiply(5, 5));