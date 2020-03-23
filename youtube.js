//youtube search request API
//load api when js called
function clientLoad() {
	gapi.client.load('youtube', 'v3', loadAPI);
}
//load api
function loadAPI() {
	gapi.client.setAPIkey('AIzaSyABC4gzAaZmyX7j_O05SyehCk55d6cBnjM');
	console.log(loadAPI);
}
//call search when button clicked
function search() {
	var query = document.getElementById('query').value;
	var request = gapi.client.youtube.search.list({
		part: 'snippet',
		q: query
	});
}
//send request to api server
request.execute(searchResponse);

//response from sent request
function searchResponse(response) {
	var responseString = JSON.stringify(response, '', 1);
	document.getElementById('response').innerHTML = responseString;
}
