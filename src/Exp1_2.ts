let flexiblevalue: any = 100;
console.log("Any (Number):", value);
flexiblevalue = "Hello";
console.log("Any (String):", value);
flexiblevalue = true;
console.log("Any (Boolean):", value);
let mysterydata: unknown = "Jyothsna";
if (typeof mysterydata === "string") {
    console.log("Unknown (String):", data.toUpperCase());
}
function greet(): void {
    console.log("Welcome to TypeScript");
}
greet();
