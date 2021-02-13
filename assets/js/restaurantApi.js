console.log(" restaurantApi.js linked")


var foodRec = "";
var restaurants = [];
var cuisines = [];
var locations = [];
var requestOptions = {
    method: 'GET',
    headers: { "user-key": "ddc0804243a2709a5f5ba68838e78c7b" },
    redirect: 'follow'
};
function restaurantApi() {
    var foodUrl = `https://developers.zomato.com/api/v2.1/search?entity_id=305&entity_type=city&collection_id=1`;
    fetch(foodUrl, requestOptions)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // restaurants = restaurants.concat(data.restaurants[0])
            // console.log(restaurants)
            console.log(data)
            // for (var i = 0; i < 30; i++) {

            //     restaurants = restaurants.concat(data.restaurants[i].restaurant.name);
            //     cuisines = cuisines.concat(data.restaurants[i].restaurant.cuisines);
            //     locations = locations.concat(data.restaurants[i].restaurant.location.address);
            //     var photo = data.restaurants[i].restaurant.photos_url;
            // }
            foodRec = data.restaurants[Math.floor(Math.random() * data.restaurants.length)]

        })
}
restaurantApi();

