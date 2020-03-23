//tasteDive test file

var apiKey: "359773-qJams-F4U551BF";

//concept borrowed from wk 16, activity 6 (greg)
// function buildQueryURL() {
//generate artist object
function artistData(search) {
queryURL = "https://tastedive.com/api/similar?q=" +
band +
//type: 'band', +
"&k" +
apiKey;
console.log(queryURL);

$.ajax({
url: queryURL,
method: "GET"
});
.then(function (response) {
console.log(response);
}
artistData("Cher");




$('#searchBtn').on('click', function(event) {
	event.preventDefault();
	var userInput = $('#userInput')
		.val()
		.trim();

	searchArtist(userInput);
});