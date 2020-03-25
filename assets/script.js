var fmAPIKey = 'bfab0ca7754766e291154f9b56c5cf7b';

// Last FM API call:
function searchArtist(artist) {
	var fmURL = 'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + artist + '&api_key=' + fmAPIKey + '&format=json';



	$.ajax({ url: fmURL, method: 'GET' }).then(function (response) {

		// EMPTY DIVS BEFORE NEW SEARCH ENTERED:
		$('#userInput').empty();
		$('#artist').empty();
		$('#artistName').empty();
		$('#listen').empty();
		$('#bio').empty();

		// BEGIN RESPONSES FROM AJAX CALL
		$('#artist').text(response.artist.name);
		$('#artistName').append('<h1>' + response.artist.name + '</h1>');
		$('#listen').text(response.artist.url);
		$('#artistName').append(`<a href="${response.artist.url}" target="blank">  ${response.artist.url}  </a>`);
		$('#bio').text(response.artist.bio.summary);
		$('#artistName').append('<p>' + response.artist.bio.summary + '</p>');


		// SIMILAR ARTIST CONTAINER
		$('#similarArtist').empty();
		for (var i = 0; i < 3; i++) {
			var similarArtistCard = $("<div class='card'>");
			var similarArtist = $('<div>');
			$('#similarArtist').empty();
			$('#similarArtist').text(response.artist.similar.artist[i].name);
			var similarArtistURL = $('<div>');
			$('#similarArtistURL').text(response.artist.similar.artist[i].url);
			$('#similarArtist').append(`<a href="${response.artist.similar.artist[i].url}" target="blank">  ${response.artist.similar.artist[i].url}  </a>`);
			similarArtist.append(similarArtistCard);
			$("#similarArtist").append(similarArtistCard);

    }

		var key = 'nvRXMBDnKmKOoUevQtuL';
		var secret = 'hJCijCBPkQSmbnplJHWgvxreRNvhKVSN';
		function artistImage(coverImage) {
			var discogsURL =
				'https://api.discogs.com/database/search?q=' +
				coverImage +
				'&key=' +
				key +
				'&secret=' +
				secret;
			console.log(discogsURL);

			$.ajax({ url: discogsURL, method: 'GET' }).then(function (response) {
				console.log(response);

				var newImage = $('<img>').attr(
					'src',
					response.results[0].cover_image
				);
				$('#test').append(newImage);
			});
		}
		artistImage();
	});

			console.log(response.artist.similar.artist[i].url);
			$('#similarArtist').append(`<a href="${response.artist.similar.artist[i].url}" target="blank">  ${response.artist.similar.artist[i].url}  </a>`);

			//console.log(response.artist.similar.artist[i].url);
			$('#similarArtist').append(`<a href="${response.artist.similar.artist[i].url}" target="blank">  ${response.artist.similar.artist[i].url}  </a>`)

			
			
			similarArtist.append(similarArtistCard);
			$("#similarArtist").append(similarArtistCard);
			


			// //END FOR LOOP AJAX - DO NOT REMOVE "}"
			}

			
			'https://api.discogs.com/database/search?q=Whitney+Houston&key=nvRXMBDnKmKOoUevQtuL&secret=hJCijCBPkQSmbnplJHWgvxreRNvhKVSN'

			var key = 'nvRXMBDnKmKOoUevQtuL';
			var secret = 'hJCijCBPkQSmbnplJHWgvxreRNvhKVSN';
			function artistImage(coverImage) {
				var discogsURL =
					'https://api.discogs.com/database/search?q=' +
					coverImage +
					'&key=' +
					key +
					'&secret=' +
					secret;
				console.log(discogsURL);

				$.ajax({ url: discogsURL, method: 'GET' }).then(function(response) {
					console.log(response);

					var newImage = $('<img>').attr(
						'src',
						response.results[0].cover_image
					);
					$('#test').append(newImage);
				});
			}
			artistImage();	
	});
	// end .then(function(response)...Do not remove "  }):  "




}

// END MAIN FUNCTION - DO NOT REMOVE ABOVE "}"

function artistImage(coverImage) {
	var key = 'nvRXMBDnKmKOoUevQtuL';
	var secret = 'hJCijCBPkQSmbnplJHWgvxreRNvhKVSN';
	var discogsURL =
		'https://api.discogs.com/database/search?q=' +
		coverImage +
		'&key=' +
		key +
		'&secret=' +
		secret;
	console.log(discogsURL);
	console.log(coverImage);

	$.ajax({ url: discogsURL, method: 'GET' }).then(function(response) {
		console.log(response);



		var newImage = $('<img>').attr(
			'src',
			response.results[0].cover_image
		);
		$('#artistImg').empty();
		$('#artistImg').append(newImage);
	});
}


//document.ready function(){
$('#searchBtn').on('click', function(event) {
event.preventDefault();
var userInput = $('#userInput').val().trim();
searchArtist(userInput);



function artistImage(coverImage) {
	var key = 'nvRXMBDnKmKOoUevQtuL';
	var secret = 'hJCijCBPkQSmbnplJHWgvxreRNvhKVSN';
	var discogsURL =
		'https://api.discogs.com/database/search?q=' +
		coverImage +
		'&key=' +
		key +
		'&secret=' +
		secret;;

	$.ajax({ url: discogsURL, method: 'GET' }).then(function (response) {
		var newImage = $('<img>').attr(
			'src',
			response.results[0].cover_image
		);
		$('#artistImg').empty();
		$('#artistImg').append(newImage);
	});
}

$('#searchBtn').on('click', function (event) {
	event.preventDefault();
	var userInput = $('#userInput').val().trim();
	searchArtist(userInput);
	artistImage(userInput);
});

artistImage(userInput);
});


