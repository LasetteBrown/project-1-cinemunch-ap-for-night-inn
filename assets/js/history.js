//global variables for both saved movies and saved restaurants
var movieHistory = [];
var foodHistory = [];

//make sure any past saved movies are included
movieHistory = JSON.parse(localStorage.getItem("movies"));
//unless there is nothing saved...
if (movieHistory === null) {
    movieHistory = []
};

//make sure any past saved restaurants are included
foodHistory = JSON.parse(localStorage.getItem("restaurants"));
//unless there is nothing saved...
if (foodHistory === null) {
    foodHistory = []
};

//display all past saved movies and restaurants to the credits page
function displayHistory() {
    //clear the divs of past loaded data
    $("#movie-history-div").html("");
    $("#food-history-div").html("");

    //displays each movie title in the movie history array
    for (var i = 0; i < movieHistory.length; i++) {
        var movieDiv = $("<div>");
        movieDiv.attr("class", "cell small-3 large-offset-2 align-self-middle");
        movieDiv.attr("id", "movie-colOne");
        movieDiv.text(movieHistory[i]);
        $("#movie-history-div").append(movieDiv);
    };

    //displays each restaurant name in the food history array
    for (var i = 0; i < foodHistory.length; i++) {
        var restaurantDiv = $("<div>");
        restaurantDiv.attr("class", "cell small-3 large-offset-2");
        restaurantDiv.attr("id", "rest-colOne");
        restaurantDiv.text(foodHistory[i]);
        $("#food-history-div").append(restaurantDiv);
    };
};

//calls the function at the loading of the page to display everything
displayHistory();