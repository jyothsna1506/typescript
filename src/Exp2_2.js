"use strict";
// Program to demonstrate Arrow Functions in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
//Traditional Named Function 
function addTraditional(a, b) {
    return a + b;
}
// Arrow Function
const addArrow = (a, b) => {
    return a + b;
};
//Shorthand Arrow Function
const multiply = (a, b) => a * b;
//Testing Traditional Function
let result1 = addTraditional(10, 20);
console.log("Traditional Function Result:", result1);
//Testing Arrow Function
let result2 = addArrow(10, 20);
console.log("Arrow Function Result:", result2);
//Testing Shorthand Arrow Functio
let result3 = multiply(10, 20);
console.log("Shorthand Arrow Function Result:", result3);
//Inline Comparison
console.log("\nComparison:");
console.log("Traditional Function:", addTraditional(5, 5));
console.log("Arrow Function:", addArrow(5, 5));
console.log("Shorthand Arrow Function:", multiply(5, 5));
//# sourceMappingURL=Exp2_2.js.map