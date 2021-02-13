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
        var movieP = $("<p>");
        movieP.attr("class", "cell small-4 large-offset-3 align-self-middle")
        movieP.attr("id", "movie-colTwo")
        movieP.text(movieHistory[i].trim());
        $("#movie-history-div").append(movieP);
    };


    for (var i = 0; i < foodHistory.length; i++) {
        var restaurantDiv = $("<p>");
        restaurantDiv.attr("class", "cell small-4 large-offset-3");
        restaurantDiv.attr("id", "rest-colTwo");
        restaurantDiv.text(foodHistory[i]);
        $("#food-history-div").append(restaurantDiv);
    };
};

displayHistory();