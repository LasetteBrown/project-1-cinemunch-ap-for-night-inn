console.log("food.js linked");


var foodRec = "";
var restaurants = [];
var requestOptions = {
    method: 'GET',
    headers: { "user-key": "ddc0804243a2709a5f5ba68838e78c7b" },
    redirect: 'follow'
};

var menuLinkDiv = $("<div>")
$("#food-description").append(menuLinkDiv);

var foodHistory = [];

foodHistory = JSON.parse(localStorage.getItem("restaurants"));
//unless there is nothing saved...
if (foodHistory === null) {
    foodHistory = []
};

function saveRestaurant() {

    var restaurantName = foodRec.restaurant.name
    foodHistory.push(restaurantName)

    window.localStorage.setItem("restaurants", JSON.stringify(foodHistory));

};

function displayFood() {

    $("#food-head").text(foodRec.restaurant.name);
    $("#food-image").attr("src", foodRec.restaurant.featured_image);
    $("#food-cuisine").text(foodRec.restaurant.cuisines);

    menuLinkDiv.html("")
    var menuLink = $("<a>");
    menuLink.attr("href", foodRec.restaurant.menu_url);
    menuLink.attr("target", "blank")
    menuLink.text("Menu");
    menuLinkDiv.append(menuLink)
};

function randomFood() {

    foodRec = restaurants[Math.floor(Math.random() * restaurants.length)];

    displayFood();
};

function restaurantApi() {
    var foodUrl = `https://developers.zomato.com/api/v2.1/search?entity_id=305&entity_type=city&collection_id=1`;
    fetch(foodUrl, requestOptions)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            console.log(data)
            restaurants = restaurants.concat(data.restaurants)

            randomFood()
        })
};

//when the 'choose a new restaurant' button is clicked
$(".redo-meal").on("click", function () {
    //then a different restaurant is generated 
    //and replaces the restaurant displayed on the page.
    randomFood();
});

$(".redo-both").on("click", function () {

    randomFood();
});

$("#save-food-btn").on("click", function () {
    saveRestaurant()
});

restaurantApi();

