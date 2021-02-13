console.log("history.js is linked")


var movieHistory = [];
var foodHistory = [];

movieHistory = JSON.parse(localStorage.getItem("movies"));
//unless there is nothing saved...
if (movieHistory === null) {
    movieHistory = []
};


foodHistory = JSON.parse(localStorage.getItem("restaurants"));
//unless there is nothing saved...
if (foodHistory === null) {
    foodHistory = []
};

function displayHistory() {
    $("#movie-history-div").html("");
    $("#food-history-div").html("");

    for (var i = 0; i < movieHistory.length; i++) {
        var movieDiv = $("<div>");
        movieDiv.attr("class", "cell small-3 large-offset-2 align-self-middle");
        movieDiv.attr("id", "movie-colOne");
        movieDiv.text(movieHistory[i]);
        $("#movie-history-div").append(movieDiv);
    };


    for (var i = 0; i < foodHistory.length; i++) {
        var restaurantDiv = $("<div>");
        restaurantDiv.attr("class", "cell small-3 large-offset-2");
        restaurantDiv.attr("id", "rest-colOne");
        restaurantDiv.text(foodHistory[i]);
        $("#food-history-div").append(restaurantDiv);
    };
};

displayHistory();