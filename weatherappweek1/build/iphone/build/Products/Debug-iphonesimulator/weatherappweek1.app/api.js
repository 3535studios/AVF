//get api data, catch lat, lng from geo module
var apiData = function(lat, lng) {
	console.log(apiData);

	var url = "http://api.wunderground.com/api/2ea7d8e37d25e57a/conditions/q/" + lat + "," + lng + ".json";
	console.log(url);
	var client = Ti.Network.createHTTPClient({

		onload : function(e) {
			var json = JSON.parse(this.responseText);
			console.log(json);
			var apiInfo = {
				city : json.current_observation.display_location.city,
				temp : json.current_observation.temp_f,
				weather : json.current_observation.weather,
				weather_icon : json.current_observation.icon_url,
				humidity : json.current_observation.relative_humidity,
				wind : json.current_observation.wind_mph,
				feelslike : json.current_observation.feelslike_f

			};
			console.log(apiInfo);
			var ui = require("ui");
			ui.buildUI(apiInfo);

		},

		onerror : function(e) {
			alert("The api is not connected.");
		},
		timeout : 5000
	});

	client.open("GET", url);
	client.send();

};

exports.apiData = apiData;
