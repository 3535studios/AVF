var getGeo = function() {
	if (Ti.Platform.osname === "android") {
		var lat = 34.04839324951172;
		var lon = -84.08440399169922;
		//imports the api module into the geo module, pass lat, lng to api module
		var apiModule = require("api");
			apiModule.walMartApiData(lat, lon);
	} else {
		Ti.Geolocation.getCurrentPosition(function(p) {
			console.log(p);
			var lat = p.coords.latitude;
			var lon = p.coords.longitude;

			//imports the api module into the geo module, pass lat, lng to api module
			var apiModule = require("api");
				apiModule.walMartApiData(lat, lon);
		});
	}
};

exports.getGeo = getGeo;
