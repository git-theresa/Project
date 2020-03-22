// Last FM URL + Base + API Keys ONLY
var fmURLBase =
	'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=bfab0ca7754766e291154f9b56c5cf7b&format=json';
var fmURLTag =
	' /2.0/?method=tag.getinfo&tag=disco&api_key=YOUR_API_KEY&format=json';
var fmAPIKey = 'bfab0ca7754766e291154f9b56c5cf7b';

var userInput= $("#userInput").val().trim();
// var fmURL = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + 	userInput + '&api_key=' + fmAPIKey + '&format=json';


// Other Global Variables for all functions



// Last FM API call:
function searchArtist(artist) {
    console.log(artist);
var fmURL='http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + artist + '&api_key=' + 	fmAPIKey +
    '&format=json';    
console.log(fmURL);
	$.ajax({ url: fmURL, method: 'GET' }).then(function(response) {
		// $('#userInput').empty();

		// $('#artist').empty();
		console.log(response);
		$('#artist').text(response.artist.name);
		console.log(response.artist.name);

        // $('#artist').empty();
    console.log(response);
    
		$('#artist').text(response.artist);
		console.log(response.artist);

        $('#listen').text(response.artist.url);
        // <a> for url
		$('#bio').text(response.artist.bio.summary);
		//$("#userInput").empty();
		//$("#artist").empty();

		//$("#artist").text(response.main.artist.name);
		//console.log(response.main.artist.name);
		//$("#listen").text(response.main.artist.url);
		//$("#bio").text(response.main.tags.tag.bio);

		// end .then(function(response)...Do not remove "  }):  "
	});
}

//tasteDive api key: 359773-qJams-F4U551BF

//concept borrowed from wk 16, activity 6 (greg)
// function buildQueryURL() {

//     var queryURL = "https://tastedive.com/music/like.json?";

//     var queryParams = {"api-key": "359773-qJams-F4U551BF"};

//     queryParams.q = $("#search-term")
//     .val()
//     .trim();

//     console.log("---------------\nURL: " + queryURL + "\n---------------");
//     console.log(queryURL + $.param(queryParams));
//     return queryURL + $.param(queryParams);
// };

// $.ajax({
//     url: queryURL,
//     method: "GET"
// })

// .then(function (response) {
//     console.log(response);
// });

// $.ajax({
//     url: queryURL,
//     method: "GET"
// })

// .then(function (response) {
//     console.log(response);
// });

//document.ready function(){
$('#searchBtn').on('click', function(event) {
	event.preventDefault();
	var userInput = $("#userInput").val().trim();

	searchArtist(userInput);
});

//sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

//initialize image
$(document).ready(function() {
	$('.parallax').parallax();
});

// document.ready end
// }
