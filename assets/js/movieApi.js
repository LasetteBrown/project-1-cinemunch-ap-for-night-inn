console.log(" movieApi.js linked")

var movies = [];
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
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
    randomMovie()
}
movieApi()
// make display function (inside should the random number thing)

function randomMovie() {
    var randomMovie = movies[Math.floor(Math.random() * movies.length)]
    console.log(randomMovie)
}