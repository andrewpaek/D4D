var init = function() {
	var world_map = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'apaek.p4jidhph',
    accessToken: 'pk.eyJ1IjoiYXBhZWsiLCJhIjoiY2lqb3RvbGdlMDB3aHRobTV6Z2s3N2RpNCJ9.D6XsPSxFP1S-cU00dP7n1w'
	});

	var geojsonMarkerOptions = {
	    radius: 8,
	    fillColor: "#ff7800",
	    color: "#000",
	    weight: 1,
	    opacity: 1,
	    fillOpacity: 0.8
	};
	var communities_layer=L.geoJson(false, {onEachFeature: onEachFeature});
	$.getJSON("communities.geojson", function(json){
		towns = json.features;
		communities_layer.addData(towns);
	});

	var roads_layer=L.geoJson();
	$.getJSON("roads.geojson", function(json){
		counties = json.features;
		roads_layer.addData(counties);
	});
	var rivers_layer=L.geoJson();
	$.getJSON("rivers.geojson", function(json){
		rivers=json.features;
		rivers_layer.addData(rivers);
	});
	var districts_layer=L.geoJson();
	$.getJSON("district.geojson", function(json){
		districts=json.features;
		districts_layer.addData(districts);
	});
	var counties_layer=L.geoJson();
	$.getJSON("county.geojson", function(json){
		counties=json.features;
		counties_layer.addData(counties);
	});
	var map = L.map('map',{
		center: [6.206090498573886,-9.95361328125],
		zoom: 10,
		layers: [world_map, communities_layer
]	});
	var baselayers = {
		"world_map": world_map
	};
	var overlays = {
		"communities": communities_layer,
		"roads": roads_layer,
		"rivers": rivers_layer,
		"districts": districts_layer,
		"counties": counties_layer
	};
	L.control.layers(baselayers, overlays).addTo(map);
};

	
var onEachFeature = function(feature, layer) {
	layer.bindPopup("Town: "+feature.properties.town_name);
}