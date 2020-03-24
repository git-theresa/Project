// ----------------------------New API --------------------- THIS NEEDS A SEPARATE PAGE TO MAKE IT FUNCTION FIRST
//sidenav
// const sideNav = document.querySelector('.sidenav');
// M.Sidenav.init(sideNav, {});

// searchArtist();
// //initialize image
// $(document).ready(function() {
//  $('.parallax').parallax();
// });

// run(searchArtist);
// document.ready end
// 
// 
//discogs URL with Kristin's keys
//'https://api.discogs.com/database/search?q=Whitney+Houston&key=nvRXMBDnKmKOoUevQtuL&secret=hJCijCBPkQSmbnplJHWgvxreRNvhKVSN'

var key = 'nvRXMBDnKmKOoUevQtuL';
var secret = 'hJCijCBPkQSmbnplJHWgvxreRNvhKVSN';
            
function artistImage(coverImage) {
	var discogsURL =
	'https://api.discogs.com/database/search?q=' + coverImage + '&key=' + key + '&secret=' + secret;
    console.log(discogsURL);

	    $.ajax({ url: discogsURL, method: 'GET' }).then(function(response) {
			console.log(response);

			var newImage = $('<img>').attr(
				'src',
				response.results[0].cover_image
				);
				$('.similarArtist').append(newImage);
				});
			};
            artistImage();
            
    $('#searchBtn').on('click', function(event) {
        event.preventDefault();
        var userInput = $('#userInput').val().trim();
        artistImage();
    });