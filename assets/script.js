// Last FM URL + Base + API Keys ONLY
var fmURLBase = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=bfab0ca7754766e291154f9b56c5cf7b&format=json';
var fmAPIKey = 'bfab0ca7754766e291154f9b56c5cf7b';

// Last FM API call:
function searchArtist(artist) {
	var fmURL = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + artist + '&api_key=' + fmAPIKey + '&format=json';
	console.log(fmURL);

		$.ajax({ url: fmURL, method: 'GET' }).then(function(response) {
		console.log(response);

		// EMPTY DIVS BEFORE NEW SEARCH ENTERED:
		$('#userInput').empty();
		$('#artist').empty();
		$('artistName').empty();
		$('#listen').empty();
		$('#bio').empty();

		//   BEGIN RESPONSES FROM AJAX CALL
		$('#artist').text(response.artist.name);
		console.log(response.artist.name);
		$('#artistName').append('<h1>' + response.artist.name + '</h1>' );
	
		$('#listen').text(response.artist.url);
		$('#artistName').append('<a>' + response.artist.url + '</a>');
	
		$('#bio').text(response.artist.bio.summary);
		// console.log(response.artist.bio.summary);


			// SIMILAR ARTIST CONTAINER
			$('#similarArtist').empty();

			for (var i = 0; i < 3; i++) {
			var similarArtistCard = $("<div class='card'>");
			var similarArtist = $('<div>');
			$('#similarArtist').empty();
			$('#similarArtist').text(response.artist.similar.artist[i]);
			console.log(response.artist.similar.artist[i]);
			$('#similarArtist').append(similarArtistCard);
	

			// //END FOR LOOP AJAX - DO NOT REMOVE "}"
			}
			
	});
	// end .then(function(response)...Do not remove "  }):  "
}
// END MAIN FUNCTION - DO NOT REMOVE ABOVE "}"

//document.ready function(){
$('#searchBtn').on('click', function(event) {
event.preventDefault();
var userInput = $('#userInput').val().trim();
searchArtist(userInput);
});

// ----------------------------New API --------------------- 
//THIS NEEDS A SEPARATE PAGE TO MAKE IT FUNCTION FIRST
//sidenav
//const sideNav = document.querySelector('.sidenav');
//M.Sidenav.init(sideNav, {});

// searchArtist();
//initialize image
//$(document).ready(function() {
//	$('.parallax').parallax();
//});

//run(searchArtist);
// document.ready end
// 
	//discogs URL with Kristin's keys
			//'https://api.discogs.com/database/search?q=Whitney+Houston&key=nvRXMBDnKmKOoUevQtuL&secret=hJCijCBPkQSmbnplJHWgvxreRNvhKVSN'

			// var key = 'nvRXMBDnKmKOoUevQtuL';
			// var secret = 'hJCijCBPkQSmbnplJHWgvxreRNvhKVSN';
			// function artistImage(coverImage) {
			// 	var discogsURL =
			// 		'https://api.discogs.com/database/search?q=' +
			// 		coverImage +
			// 		'&key=' +
			// 		key +
			// 		'&secret=' +
			// 		secret;
			// 	console.log(discogsURL);

			// 	$.ajax({ url: discogsURL, method: 'GET' }).then(function(response) {
			// 		console.log(response);

			// 		var newImage = $('<img>').attr(
			// 			'src',
			// 			response.results[0].cover_image
			// 		);
			// 		$('#test').append(newImage);
			// 	});
			// }
			// artistImage('cher');
			// artistImage('madonna');
