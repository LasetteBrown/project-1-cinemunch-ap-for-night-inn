console.log("food.js linked")


var foodRec = "";
var restaurants = [];
var cuisines = [];
var locations = [];
var requestOptions = {
    method: 'GET',
    headers: { "user-key": "ddc0804243a2709a5f5ba68838e78c7b" },
    redirect: 'follow'
};

function displayFood() {

    console.log(foodRec.restaurant.menu_url)
    $("#food-head").text(foodRec.restaurant.name)
    $("#food-image").attr("src", foodRec.restaurant.featured_image)
    $("#food-cuisine").text(foodRec.restaurant.cuisines)

    var menuLink = $("<a>")
    menuLink.attr("href", foodRec.restaurant.menu_url)
    menuLink.text("Menu")
    $("#food-description").append(menuLink)

}

function randomFood() {

    foodRec = restaurants[Math.floor(Math.random() * restaurants.length)]

    displayFood()
}

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
}

//when the 'choose a new restaurant' button is clicked
$(".newFoodBtn").on("click", function () {
    //then a different restaurant is generated 
    //and replaces the restaurant displayed on the page.
    randomFood()
})

$(".redo-both").on("click", function () {
    // randomMovie()
    randomFood()
})

restaurantApi();

