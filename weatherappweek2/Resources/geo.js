//gets geolocation data to determine the users location

var geoData = function() {
	if (Ti.Platform.osname === "android") {
		var lat = 34.04839324951172;
		var lng = -84.08440399169922;
		//imports the api module into the geo module, pass lat, lng to api module
		var apiModule = require("api");
			apiModule.apiData(lat, lng);
	} else {
		Ti.Geolocation.getCurrentPosition(function(p) {
			console.log(p);
			var lat = p.coords.latitude;
			var lng = p.coords.longitude;

			//imports the api module into the geo module, pass lat, lng to api module
			var apiModule = require("api");
				apiModule.apiData(lat, lng);
		});
	}
};

exports.geoData = geoData;
