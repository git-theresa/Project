//DEAD CODED SOCIETY PSEUDO-CODED
// what our application does?
// who is our application for?
// first step to create?
// --- we know we need the user to "input" an artist's name, then click a "button"
// API 1. - Last FM
// API 2. - Thrive

// Establish API Key Variables
// URL Base Name
// URL Base Name + API Key
// What components do we need variables for
//  1. Artist Object= Genre, year started, number one hit (top 5 hits)
//  2. Articles appear on page when? after artist's stats? do we click a "see more button"

//d7bdd05829c75c43b18aac4ec6f2c45871a06f85

// end function searchArtist

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

//d7bdd05829c75c43b18aac4ec6f2c45871a06f85;

$('#searchBtn').on('click', function (event) {
    event.preventDefault();
    var fmURLBase =
        'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=bfab0ca7754766e291154f9b56c5cf7b&format=json';
    var fmAPIKey = 'bfab0ca7754766e291154f9b56c5cf7b';
    var fmURL = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + userInput + '&api_key=' + fmAPIKey + '&format=json';

   
    //var userInput = '';
    var userInput = $('#userInput').val();
        $.ajax({ 
            url: fmURL, 
            method: 'GET' 
        })
            .then(function (response) {

            console.log(response);
            console.log(fmURL);
            
           // $('#userInput').empty();
           // $('#artist').empty();
            $('#artist').text(response.artist.name);
            console.log(response.artist.name);
            $('#listen').text(response.artist.url);
            $('#bio').text(response.tags.tag.bio);
        });

    
    //searchArtist('cher');
    // end .then(function(response)
    // end function searchArtist

    // document.ready function(){


    // var userInput = $("#searchTerm").val().trim();


});
//run(searchArtist);
// document.ready end
// }

//  HEAD
//  1762a23ec065abade2b42085b6b5f2e60f7118d8