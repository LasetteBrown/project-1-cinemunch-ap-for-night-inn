console.log("script.js linked")

var movieRec = ""
var movies = [];
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

// var restaurants = [];
// foodRec = ""
// var placeName = "";
// var cuisineType = "";
// var location = "";
// var photo
// var restaurantRequestOptions = {
//     method: 'GET',
//     headers: { "user-key": "ddc0804243a2709a5f5ba68838e78c7b" },
//     redirect: 'follow'
// };

// var history = []

// history = JSON.parse(localStorage.getItem("previous"));
// //unless there is nothing saved...
// if (history === null) {
//     history = []
// }

function displayMovie() {

    $("#movie-title").text(movieRec.title)
    $("#movie-image").attr("src", "https://image.tmdb.org/t/p/w500" + movieRec.poster_path)
    $("#movie-summery").text(movieRec.overview)
}

function displayFood() {

    $("#food-head").text(placeName)
    $("#food-image").attr("src", photo)
    $("#food-cuisine").text(cuisineType)

}

function randomMovie() {

    movieRec = movies[Math.floor(Math.random() * movies.length)]

    displayMovie()

}

function randomFood() {

    foodRec = restaurants[Math.floor(Math.random() * data.restaurants.length)]

    displayFood()
}


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

}

function restaurantApi() {
    var foodUrl = `https://developers.zomato.com/api/v2.1/search?entity_id=305&entity_type=city&collection_id=1`;
    fetch(foodUrl, restaurantRequestOptions)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            console.log(data)
            restaurants = restaurants.concat(data.restaurants)

            randomFood()
        })
}

// function saveRecs() {
//     var previousRecs = {
//         movie: movieRec,
//         food: foodRec,
//     }

//     history.push(previousRecs)

//     window.localStorage.setItem("previous", JSON.stringify(history));

// }

//(optional) with a form asking for user preferences/perameters
//(optional) use those parameters to limit our search

//when the 'choose a new movie' button is clicked
$(".redo-movie").on("click", function () {

    //Then a different random movie is generated
    //and replaces the movie displayed on the page.
    randomMovie()
})


//when the 'choose a new restaurant' button is clicked
$(".newFoodBtn").on("click", function () {
    //then a different restaurant is generated 
    //and replaces the restaurant displayed on the page.
    randomFood()
})

$(".redo-both").on("click", function () {
    randomMovie()
    // randomFood()
})


//When the 'save' button is clicked
// $(".saveBtn").on("click", function () {
//     saveRecs()
// })

//then the currently displayed recommendations are saved into local storage.

//When the 'history' button is clicked
$(".historyBtn").on("click", function () {
    //then we are redirected to a third page
    window.location.href = "index3.html"
    //which displays past recommendations.
})

movieApi()
// restaurantApi();
