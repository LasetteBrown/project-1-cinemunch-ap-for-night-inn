console.log(" movie.js linked");

var movieRec = "";
var movies = [];
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

var movieHistory = [];

movieHistory = JSON.parse(localStorage.getItem("movies"));
//unless there is nothing saved...
if (movieHistory === null) {
    movieHistory = []
};

function saveMovie() {

    var movieTitle = movieRec.title
    movieHistory.push(movieTitle)

    window.localStorage.setItem("movies", JSON.stringify(movieHistory));

};

function displayMovie() {


    $("#movie-card").html("");

    var cardSection = $("<div>");
    cardSection.addClass("card-section");
    $("#movie-card").append(cardSection);

    var cardHead = $("<p>");
    cardHead.addClass("card-head");
    cardHead.text(movieRec.title);
    cardSection.append(cardHead);

    var moviePoster = $("<img>");
    moviePoster.attr("src", "https://image.tmdb.org/t/p/w500" + movieRec.poster_path);
    cardSection.append(moviePoster);


    var movieHead = $("<div>");
    movieHead.addClass("card-section");
    movieHead.attr("id", "movie-head")
    $("#movie-card").append(movieHead);

    var movieSummery = $("<p>")
    movieSummery.text(movieRec.overview);
    movieHead.append(movieSummery)
};

function randomMovie() {

    movieRec = movies[Math.floor(Math.random() * movies.length)];

    if (isPaused) {

    } else {
        displayMovie();
    }
};

function movieApi() {
    isPaused = true;
    for (var i = 0; i < 249; i++) {
        var movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=4090692509e0d1e371f6626e463b213b&page=${i + 1}`;

        fetch(movieUrl, requestOptions)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                movies = movies.concat(data.results)
                randomMovie()
            })
    }
    isPaused = false;
};

$(".redo-movie").on("click", function () {

    randomMovie();

});


$(".redo-both").on("click", function () {
    randomMovie()

});

$("#save-movie-btn").on("click", function () {
    saveMovie();
})

movieApi()

