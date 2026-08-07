let flexiblevalue: any = 100;
console.log("Any (Number):", flexiblevalue);
flexiblevalue = "Hello";
console.log("Any (String):", flexiblevalue);
flexiblevalue = true;
console.log("Any (Boolean):", flexiblevalue);
let mysterydata: unknown = "Jyothsna";
if (typeof mysterydata === "string") {
    console.log("Unknown (String):", mysterydata.toUpperCase());
}
function greet(): void {
    console.log("Welcome to TypeScript");
}
greet();
