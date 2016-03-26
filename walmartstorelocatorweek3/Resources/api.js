var walMartApiData = function(lat, lon) {
	
	console.log(walMartApiData);

	var url = "http://api.walmartlabs.com/v1/stores?format=json" + "&" + "lat=" + lat + "&" + "lon=" + lon + "&" + "apiKey=" + "7k8cyr9ccesq4c6wxmaascse";
	console.log(url);
	
	var client = Ti.Network.createHTTPClient({

		onload : function(e) {
			var json = JSON.parse(this.responseText);
			console.log(json);
			var stores = [];
			
				for (i=0, j=json.length; i<j; i++) {
					var store = {
					name: json[i].name,
					zip: json[i].zip,
					phone: json[i].phoneNumber,
					address: json[i].streetAddress,
					city: json[i].city
					};
					stores.push(store);
					//console.log(store);
					
				}
				var uiModule = require("ui");
					uiModule.storeUI(stores);
				
		},

		onerror : function(e) {
			alert("There is a error with your api.  Please check the connection.");
		},
		timeout : 5000
	});

	client.open("GET", url);
	client.send();

		
};

exports.walMartApiData = walMartApiData;
