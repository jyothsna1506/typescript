// Program to demonstrate Special Types in TypeScript

// any type
let value: any = 100;
console.log("Any (Number):", value);

value = "Hello";
console.log("Any (String):", value);

value = true;
console.log("Any (Boolean):", value);

// unknown type
let data: unknown = "TypeScript";

if (typeof data === "string") {
    console.log("Unknown (String):", data.toUpperCase());
}

// void type
function greet(): void {
    console.log("Welcome to TypeScript");
}

greet();