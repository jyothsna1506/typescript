"use strict";
// Program to demonstrate Special Types in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
// any type
let value = 100;
console.log("Any (Number):", value);
value = "Hello";
console.log("Any (String):", value);
value = true;
console.log("Any (Boolean):", value);
// unknown type
let data = "TypeScript";
if (typeof data === "string") {
    console.log("Unknown (String):", data.toUpperCase());
}
// void type
function greet() {
    console.log("Welcome to TypeScript");
}
greet();
//# sourceMappingURL=Exp1_2.js.map