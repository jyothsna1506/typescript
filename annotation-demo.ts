let movieTitle:string="Baahubali:The Beginneing";
let releaseYear:number=2015;
let isBlockbuster:boolean=true;

function getMovieStatus(title:string,year:number):string{
    return '${title} was massive hit released in ${year}';
}

let leadActors:string[] =["Prabhas", "Rana Daggubati", "Anushka Shetty","Tamannah"];

const summary:string = getMovieStatus(movieTitle,releaseYear);
console.log(summary);
console.log("starring:"+leadActors.join(","));
console.log("Is it a blockbuster ? " + (isBlockbuster ? "Yes, Jai Mahishmati " : "No"));


