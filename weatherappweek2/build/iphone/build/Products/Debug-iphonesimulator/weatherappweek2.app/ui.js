//builds the ui to display to the user

var buildUI = function(dbArray) {
	console.log(buildUI);
	var win = Ti.UI.createWindow({
		backgroundColor : "#f2f2f0",
		layout : "vertical"
	});

	if (Ti.Platform.osname === "android") {

		var cityLabel = Ti.UI.createLabel({
			text : dbArray[0].city,
			backgroundColor : "#f2c641",
			color : "#fff",
			height : 100,
			top : 0,
			width : "100%",
			textAlign : "center",
			font : {
				fontSize : 64
			}
		});
	} else {
		var cityLabel = Ti.UI.createLabel({
			text : dbArray[0].city,
			backgroundColor : "#f2c641",
			color : "#fff",
			height : 100,
			top : 20,
			width : "100%",
			textAlign : "center",
			font : {
				fontSize : 64
			}
		});
	}

	var tempLabel = Ti.UI.createLabel({
		text : dbArray[1].temp_f + "\u00B0",
		backgroundColor : "#96d9ad",
		color : "#fff",
		height : 200,
		width : "100%",
		textAlign : "center",
		font : {
			fontSize : 164
		}
	});

	var weatherLabel = Ti.UI.createLabel({
		text : dbArray[2].weather,
		backgroundColor : "#f26b5e",
		color : "#fff",
		height : 100,
		width : "100%",
		textAlign : "center",
		font : {
			fontSize : 64
		}
	});

	var humidityLabel = Ti.UI.createLabel({
		text : "Humidity: " + dbArray[3].relative_humidity,
		backgroundColor : "#6a777a",
		color : "#fff",
		height : 100,
		width : "100%",
		textAlign : "center",
		font : {
			fontSize : 44
		}
	});

	var windLabel = Ti.UI.createLabel({
		text : "Wind MPH: " + dbArray[4].wind_mph,
		backgroundColor : "#64350d",
		color : "#fff",
		height : 100,
		width : "100%",
		textAlign : "center",
		font : {
			fontSize : 44
		}
	});

	var feelslike_fLabel = Ti.UI.createLabel({
		text : "Feels Like: " + dbArray[5].feelslike_f + "\u00B0",
		backgroundColor : "#74bfd4",
		color : "#fff",
		height : 100,
		width : "100%",
		textAlign : "center",
		font : {
			fontSize : 44
		}
	});

	win.add(cityLabel);
	win.add(tempLabel);
	win.add(weatherLabel);
	win.add(humidityLabel);
	win.add(windLabel);
	win.add(feelslike_fLabel);

	win.open();
};

exports.buildUI = buildUI;
