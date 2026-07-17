"use strict";
let movieTitle = "Baahubali:The Beginneing";
let releaseYear = 2015;
let isBlockbuster = true;
function getMovieStatus(title, year) {
    return '${title} was massive hit released in ${year}';
}
let leadActors = ["Prabhas", "Rana Daggubati", "Anushka Shetty", "Tamannah"];
const summary = getMovieStatus(movieTitle, releaseYear);
console.log(summary);
console.log("starring:" + leadActors.join(","));
console.log("Is it a blockbuster ? " + (isBlockbuster ? "Yes, Jai Mahishmati " : "No"));
