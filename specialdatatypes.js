"use strict";
let flexibleValue = 10;
flexibleValue = "Now i am a String";
flexibleValue = true;
let mysteryValue = "Hello Jythsna";
if (typeof mysteryValue == "string") {
    console.log("Length of unknown string : " + mysteryValue.length);
}
function logNotification(message) {
    console.log("ALERT : " + message);
}
logNotification("Environment is not safe for work");
