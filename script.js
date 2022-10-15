let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(
        x,
        y,
        z
    ) {
        this.title = x;
        this.rating = y;
        this.haveWatched = z;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = () => {
    console.log("A new movie is added");
    allMovies.push(movie1)
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
    console.log("Printing all movies...")
    allMovies.forEach((allMovies) => {
        console.log(allMovies.title + ",", "rating of", allMovies.rating + ",", "haveWatched:", allMovies.haveWatched);
    });

    if (allMovies.length > 3) {
        console.log("\nYou have", allMovies.length, "movies in total")
    } else {
        console.log("\nYou have", allMovies.length, "movies in total")
    }
}

//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
    console.log("printing movie that has a rating higher than 3.5")
    var counter = 0;
    allMovies.forEach((allMovies) => {
        if (allMovies.rating >= rating) {
            console.log(allMovies.title, "has a rating of", allMovies.rating)
            counter ++;
        }
    });
    console.log("\nIn total, there are", counter, "matches")
       
}

//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    console.log("changing the status of the movie...");
    allMovies.forEach((allMovies) => {
        if (allMovies.title == title) {
            if (allMovies.haveWatched == true) {
                allMovies.haveWatched = false;
            } else {
                allMovies.haveWatched = true;
            }
        }
    });
}

////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);