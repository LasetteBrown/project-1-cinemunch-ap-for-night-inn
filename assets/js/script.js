console.log("linked")

var movieRec = ""
var foodRec = ""


var movies = [];
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

var history = []

history = JSON.parse(localStorage.getItem("previous"));
//unless there is nothing saved...
if (history === null) {
    history = []
}



function movieApi() {
    for (var i = 0; i < 249; i++) {
        var movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=4090692509e0d1e371f6626e463b213b&page=${i + 1}`;
        //console.log(movieUrl)
        fetch(movieUrl, requestOptions)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                movies = movies.concat(data.results)
                // console.log(data.results);
                // if (i === 4){
                // console.log(movies);
                // call function to update display here
                //}
            })
    }
    console.log("ready")

}

// make display function (inside should the random number thing)

function randomMovie() {
    movieRec = movies[Math.floor(Math.random() * movies.length)]
    console.log(movieRec)
    displayMovie()
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

    $("#movie-card").html("")

    var movieTitle = $("<h3>")
    movieTitle.text(movieRec.title)
    $("#movie-card").append(movieTitle)

    var movieImage = $("<img>")
    movieImage.attr("src", "https://image.tmdb.org/t/p/w500" + movieRec.poster_path)
    $("#movie-card").append(movieImage)

    var movieSummery = $("<p>")
    movieSummery.text(movieRec.overview)
    $("#movie-card").append(movieSummery)

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





function getFood() {//and a random delivery restaurant is generated
    //fetch random restaurane from api
    foodRec = //random restaurant fetched
        displayFood()
}


//When the 'help me' button is clicked,
$(".helpBtn").on("click", function () {
    //redirect to a new page
    window.location.href = "index2.html"

    randomMovie()
    // getFood()
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


movieApi()
//which displays past recommendations.