"use strict";
let userName = "Jyothsna";
let userAge = 20;
let isMember = true;
console.log("Data type of userName is: " + typeof userName);
console.log("Data type of userAge is: " + typeof userAge);
console.log("Data type of isMember is: " + typeof isMember);
function displayUserInfo(name, age, member) {
    console.log("User Name: " + name);
    console.log("User Age: " + age);
    console.log("Is Member: " + member);
}
displayUserInfo(userName, userAge, isMember);
