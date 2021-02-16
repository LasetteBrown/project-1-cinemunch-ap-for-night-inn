//this global variable holds the object selected as the random movie recommendation
var movieRec = "";
//this is an array holds all of the movie objects pulled from the api.
var movies = [];
//variables needed for the API call
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

//an array to hold all movies that the user saves.
var movieHistory = [];

//make sure that any past saved movies are included in the array
movieHistory = JSON.parse(localStorage.getItem("movies"));
//unless there is nothing saved...
if (movieHistory === null) {
    movieHistory = []
};

//saves the current movie
function saveMovie() {
    //selects the current movie title
    var movieTitle = movieRec.title
    //adds it to the history array
    movieHistory.push(movieTitle)
    //and adds it to local storage
    window.localStorage.setItem("movies", JSON.stringify(movieHistory));

};

//a function to display the movie recommendation on the page
function displayMovie() {
    //clears out previous information displayed in the movie card
    $("#movie-card").html("");

    //creates a card section div
    var cardSection = $("<div>");
    cardSection.addClass("card-section");
    $("#movie-card").append(cardSection);

    //adds the movie title to the movie div
    var cardHead = $("<p>");
    cardHead.addClass("card-head");
    cardHead.text(movieRec.title);
    cardSection.append(cardHead);

    //adds an image of the movie poster
    var moviePoster = $("<img>");
    moviePoster.attr("src", "https://image.tmdb.org/t/p/w500" + movieRec.poster_path);
    cardSection.append(moviePoster);

    //creates a div for the summery
    var movieHead = $("<div>");
    movieHead.addClass("card-section");
    movieHead.attr("id", "movie-head")
    $("#movie-card").append(movieHead);

    //adds the movie summery to the page
    var movieSummery = $("<p>")
    movieSummery.text(movieRec.overview);
    movieHead.append(movieSummery)
};

//this function randomly selects one movie object from the movies array
function randomMovie() {

    movieRec = movies[Math.floor(Math.random() * movies.length)];
    //and calls the function to display the movie
    displayMovie();
};

//the function that fetches the movie data
function movieApi() {
    //used a for loop in order to increase the amount of movie options. The api limits the fetch to 20 per page.
    for (var i = 0; i < 249; i++) {
        //the url for the movie database api
        var movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=4090692509e0d1e371f6626e463b213b&page=${i + 1}`;
        fetch(movieUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                //stores the data into the movies array
                movies = movies.concat(data.results)
                //once the movies array reaches it's full length, call the next function
                if (movies.length == 4980) {
                    randomMovie()
                }
            })
    }
};

//runs the random movie function whenever the redo movie button is clicked.
$(".redo-movie").on("click", function () {

    randomMovie();
});

//runs the random movie function whenever the redo both button is clicked.
$(".redo-both").on("click", function () {
    randomMovie()

});

//saves the current movie when the save button is clicked.
$("#save-movie-btn").on("click", function () {
    saveMovie();
})

//the function called when the page loads that fetches all movies from the api.
movieApi()

