// Last FM URL + Base + API Keys ONLY
var fmURLBase =
	'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=bfab0ca7754766e291154f9b56c5cf7b&format=json';
var fmURLTag =
	' /2.0/?method=tag.getinfo&tag=disco&api_key=YOUR_API_KEY&format=json';
var fmAPIKey = 'bfab0ca7754766e291154f9b56c5cf7b';



// Last FM API call:
function searchArtist(artist) {
	console.log(artist);
	var fmURL =
		'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' +
		artist +
		'&api_key=' +
		fmAPIKey +
		'&format=json';
	console.log(fmURL);
	$.ajax({ url: fmURL, method: 'GET' }).then(function(response) {
        console.log(response);

        // EMPTY DIVS BEFORE NEW SEARCH ENTERED:
        $('#userInput').empty();
        $('#artist').empty();
        $('#listen').empty();
        $('#bio').empty();
        $('artistSummary').empty();
		        //   BEGIN RESPONSES FROM AJAX CALL
		$('#artist').text(response.artist.name);
        // Need to append to <h1> by child or create ID
        $('#artistName').append('<h1>' + response.artist.name + '</h1>');
        console.log(response.artist.name);
        
        $('#listen').text(response.artist.url);
        console.log(response.artist.url);
        $('#artistSummary').append('<a>' + response.artist.url + '</a>'); 
        // <a> for url
        $('#bio').text(response.artist.bio.summary);
        console.log(response.artist.bio.summary);
        $('#artistSummary').append(response.artist.bio.summary);
        
 // SIMILAR ARTIST FUNCTION
 var fmURL =
 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' +
 artist +
 '&api_key=' +
 fmAPIKey +
 '&format=json';
 $.ajax({url: fmURL, method: "GET"})
 .then(function(similarArtist) {
 console.log(similarArtist);
 //  $('#similarArtist').empty();

for (var i = 0; i < 3; i++) {
    var similarArtistCard = $("<div class='card'>");
    var similarArtist = $("<div>");

$('similarArtist').text(response.artist.similar);
console.log(response.artist.similar.artist[0]);
console.log(response.artist.similar.artist[1]);
console.log(response.artist.similar.artist[2]);
$('#similarArtist').append(similarArtistCard);
 



    



// //END FOR LOOP AJAX 
}
// END 
 })
// end .then(function(response)...Do not remove "  }):  "
});
// END MAIN FUNCTION
}



//document.ready function(){
$('#searchBtn').on('click', function(event) {
	event.preventDefault();
	var userInput = $('#userInput')
		.val()
		.trim();

	searchArtist(userInput);
});

//sidenav
//const sideNav = document.querySelector('.sidenav');
//M.Sidenav.init(sideNav, {});



	// searchArtist()
//initialize image
//$(document).ready(function() {
//	$('.parallax').parallax();
//});



//run(searchArtist);
// document.ready end
// }
