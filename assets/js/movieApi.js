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

    $("#movie-title").text(movieRec.title);
    $("#movie-image").attr("src", "https://image.tmdb.org/t/p/w500" + movieRec.poster_path);
    $("#movie-summery").text(movieRec.overview);
};

function randomMovie() {

    movieRec = movies[Math.floor(Math.random() * movies.length)];

    displayMovie();

};

function movieApi() {
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
