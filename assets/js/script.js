console.log("linked")

var movieRec = ""
var foodRec = ""

function displayRecs() {
    //and displayed on the page with title, summery, and poster image of the film
    var movieDiv = $("<div>")
    movieDiv.addclass("movie-card")
    $("rec-div").append(movieDiv)

    var movieTitle = $("<h3>")
    movieTitle.text(movieRec.title)
    $(".movie-card").append(movieTitle)

    var movieImage = $("<img>")
    movieImage.attr("src", movieRec.image)
    $(".movie-card").append(movieImage)

    var movieSummery = $("<p>")
    movieSummery.text(movieRec.summery)
    $(".movie-card").append(movieSummery)

    //and displayed on the page with restaurant title, description (and optional other things).
    var foodDiv = $("<div>")
    foodDiv.addclass("food-card")
    $("rec-div").append(foodDiv)

    var foodRestaurant = $("<h3>")
    foodRestaurant.text(foodRec.restaurant)
    $(".movie-card").append(foodRestaurant)

    var foodImage = $("<img>")
    foodImage.attr("src", foodRec.image)
    $(".movie-card").append(foodImage)

    var foodDescript = $("<p>")
    foodDescript.text(foodRec.description)
    $(".movie-card").append(foodDescript)


}


function getRecs() {
    //a random movie is generated
    // fetch random movie from api
    movieRec = //random movie fetched
        //and a random delivery restaurant is generated
        //fetch random restaurane from api
        foodRec = //random restaurant fetched
        displayRecs()
}


//When the 'help me' button is clicked,
$(".helpBtn").on("click", function () {
    //redirect to a new page
    window.location.href = "index2.html"
    getRecs()
})

//(optional) with a form asking for user preferences/perameters
//(optional) use those parameters to limit our search

//when the 'choose a new movie' button is clicked
//Then a different random movie is generated
//and replaces the movie displayed on the page.

//when the 'choose a new restaurant' button is clicked
//then a different restaurant is generated 
//and replaces the restaurant displayed on the page.

//When the 'save' button is clicked
//then the currently displayed recommendations are saved into local storage.

//When the 'history' button is clicked
//then we are redirected to a third page
//which displays past recommendations.