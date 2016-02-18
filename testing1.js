$( document ).ready(function() {
	var map = L.map('map').setView([51.505, -0.09], 13);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'apaek.p4jidhph',
    accessToken: 'pk.eyJ1IjoiYXBhZWsiLCJhIjoiY2lqb3RvbGdlMDB3aHRobTV6Z2s3N2RpNCJ9.D6XsPSxFP1S-cU00dP7n1w'
}).addTo(map);
})

var f = function() {
	shp("Communities.zip").then(function(geojson){
		
	});
}