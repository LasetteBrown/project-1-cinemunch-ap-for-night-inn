//a global variable for the food recommendation
var foodRec = "";
//a global array for all the restaurants fetched from the array
var restaurants = [];
//variables needed for the fetch request
var requestOptions = {
    method: 'GET',
    headers: { "user-key": "ddc0804243a2709a5f5ba68838e78c7b" },
    redirect: 'follow'
};

//a variable to store saved restaurants
var foodHistory = [];
//make sure any past saved restaurants are in the array
foodHistory = JSON.parse(localStorage.getItem("restaurants"));
//unless there is nothing saved...
if (foodHistory === null) {
    foodHistory = []
};

//creates a div to display the recommendation's menu link into
var menuLinkDiv = $("<div>");
$("#food-description").append(menuLinkDiv);


//the function that saves restaurants to local storage
function saveRestaurant() {
    //extracts the name of the restaurant
    var restaurantName = foodRec.restaurant.name
    //and pushes it to the history array
    foodHistory.push(restaurantName)
    //and store it to local storage
    window.localStorage.setItem("restaurants", JSON.stringify(foodHistory));

};

//a function that displays the recommended restaurant to the page
function displayFood() {
    //add the restaurant name to the page
    $("#food-head").text(foodRec.restaurant.name);

    //display either the featured image from the api or a placeholder imate
    if (foodRec.restaurant.featured_image === "") {
        //in case there is no featured image the placeholder is displayed
        $("#food-image").attr("src", "./assets/images/placeholderAlt.jpg");
    } else {
        //but if the api includes a featured image it will be displayed.
        $("#food-image").attr("src", foodRec.restaurant.featured_image);
    }

    //displays the type of cuisine
    $("#food-cuisine").text(foodRec.restaurant.cuisines);

    //adds a link to that restaurant's menu
    menuLinkDiv.html("")
    var menuLink = $("<a>");
    menuLink.attr("href", foodRec.restaurant.menu_url);
    menuLink.attr("target", "blank")
    menuLink.text("Menu");
    menuLinkDiv.append(menuLink)
};

//chooses a random restaurant from the restaurants array
function randomFood() {

    foodRec = restaurants[Math.floor(Math.random() * restaurants.length)];
    //and calls the function that display it to the screen
    displayFood();
};

//fetches data from the restaurant api
function restaurantApi() {
    //the url for zomato
    var foodUrl = `https://developers.zomato.com/api/v2.1/search?entity_id=305&entity_type=city&collection_id=1`;
    fetch(foodUrl, requestOptions)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //adds all objects fetched into the restaurants array
            restaurants = restaurants.concat(data.restaurants)
            //and calls the function that selects a random one.
            randomFood()
        })
};

//when the 'redo meal' button is clicked
$(".redo-meal").on("click", function () {
    //then a different restaurant is generated 
    randomFood();
});

//when the redo both button is clicked
$(".redo-both").on("click", function () {
    //then a different restaurant is generated
    randomFood();
});

//when the save button is clicked
$("#save-food-btn").on("click", function () {
    //then that restaurant is saved to local storage
    saveRestaurant()
});

//this function is called when the page loads to fetch the data from the api.
restaurantApi();

