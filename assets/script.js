var fmURLBase =
    'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=bfab0ca7754766e291154f9b56c5cf7b&format=json';
var fmURLTag = " /2.0/?method=tag.getinfo&tag=disco&api_key=YOUR_API_KEY&format=json"
var fmAPIKey = 'bfab0ca7754766e291154f9b56c5cf7b';
var fmURL =
	'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' +
	userInput +
	'&api_key=' +
	fmAPIKey +
    '&format=json';

console.log(fmURL);

var userInput = '';


function searchArtist() {
	console.log(searchArtist);
	$.ajax({ url: fmURL, method: 'GET' }).then(function(response) {
		// $('#userInput').empty();
        // $('#artist').empty();
        console.log(response);
		$('#artist').text(response.artist[0].artist[0]);
		console.log(response.artist.artist[0].artist.name);
		$('#listen').text(response.main.artist.url);
        $('#bio').text(response.main.tags.tag.bio);
        
                // end .then(function(response)...Do not remove "  }):  "
	});

}
searchArtist('cher');
// end .then(function(response)
// end function searchArtist

// document.ready function(){
$('#searchBtn').on('click', function(event) {
	event.preventDefault();

	// var userInput = $("#searchTerm").val().trim();

	searchArtist();
});

// document.ready end
// }

//tasteDive api key: 359773-project1-J9FLOEVJ
//  HEAD
//  1762a23ec065abade2b42085b6b5f2e60f7118d8


