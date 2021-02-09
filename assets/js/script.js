console.log("linked")

var movieRec = ""
var foodRec = ""

var history = []

history = JSON.parse(localStorage.getItem("previous"));
//unless there is nothing saved...
if (history === null) {
    history = []
}


function saveRecs() {
    var previousRecs = {
        movie: movieRec,
        food: foodRec,
    }

    history.push(previousRecs)

    window.localStorage.setItem("previous", JSON.stringify(history));

}


function displayMovie() {
    //and displayed on the page with title, summery, and poster image of the film
    $(".movie-card").html("")

    var movieTitle = $("<h3>")
    movieTitle.text(movieRec.title)
    $(".movie-card").append(movieTitle)

    var movieImage = $("<img>")
    movieImage.attr("src", movieRec.image)
    $(".movie-card").append(movieImage)

    var movieSummery = $("<p>")
    movieSummery.text(movieRec.summery)
    $(".movie-card").append(movieSummery)
}

function displayFood() {

    //and displayed on the page with restaurant title, description (and optional other things).
    $(".food-card").html("")

    var foodRestaurant = $("<h3>")
    foodRestaurant.text(foodRec.restaurant)
    $(".food-card").append(foodRestaurant)

    var foodImage = $("<img>")
    foodImage.attr("src", foodRec.image)
    $(".food-card").append(foodImage)

    var foodDescript = $("<p>")
    foodDescript.text(foodRec.description)
    $(".food-card").append(foodDescript)

}



function getMovie() {
    //a random movie is generated
    // fetch random movie from api
    movieRec = //random movie fetched
        displayMovie()
}

function getFood() {//and a random delivery restaurant is generated
    //fetch random restaurane from api
    foodRec = //random restaurant fetched
        displayFood()
}


//When the 'help me' button is clicked,
$(".helpBtn").on("click", function () {
    //redirect to a new page
    window.location.href = "index2.html"
    getMovie()
    getFood()
})

//(optional) with a form asking for user preferences/perameters
//(optional) use those parameters to limit our search

//when the 'choose a new movie' button is clicked
$(".newMovieBtn").on("click", function () {
    getMovie()
})

//Then a different random movie is generated
//and replaces the movie displayed on the page.

//when the 'choose a new restaurant' button is clicked
$(".newFoodBtn").on("click", function () {
    getFood()
})

//then a different restaurant is generated 
//and replaces the restaurant displayed on the page.

//When the 'save' button is clicked
$(".saveBtn").on("click", function () {
    saveRecs()
})

//then the currently displayed recommendations are saved into local storage.

//When the 'history' button is clicked
$(".historyBtn").on("click", function () {
    //then we are redirected to a third page
    window.location.href = "index3.html"
})


//which displays past recommendations.