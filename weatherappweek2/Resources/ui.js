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
		text : dbArray[0].temp + "\u00B0",
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
		text : dbArray[0].weather,
		backgroundColor : "#f26b5e",
		color : "#fff",
		height : 100,
		width : "100%",
		textAlign : "center",
		font : {
			fontSize : 64
		}
	});
	
	var fourthGroupLabel = Ti.UI.createLabel ({
		text : "Humidity: " + dbArray[0].humidity + "  "+ "Wind MPH: " + dbArray[0].wind + "  "+ "Feels like: " + dbArray[0].feelslike + "\u00B0",
		backgroundColor : "#6a777a",
		color : "#fff",
		height : 100,
		width : "100%",
		textAlign : "center",
		font : {
			fontSize : 20
		}
	});
	
	var fifthGroupLabel = Ti.UI.createLabel({
		text : "Wind Direction: " + dbArray[0].wind_dir + "  " + "Wind Gust: " + dbArray[0].wind_gust + "  " + "Wind Degrees: " + dbArray[0].wind_degrees,
		backgroundColor : "#64350d",
		color : "#fff",
		height : 100,
		width : "100%",
		textAlign : "center",
		font : {
			fontSize : 20
		}
	});

	var sixthGroupLabel = Ti.UI.createLabel({
		text : "Visibility: " + dbArray[0].visibility + "  " + "Pressure: " + dbArray[0].pressure + "  " + "Dewpoint: " + dbArray[0].dewpoint,
		backgroundColor : "#74bfd4",
		color : "#fff",
		height : 100,
		width : "100%",
		textAlign : "center",
		font : {
			fontSize : 20
		}
	});
	
	var seventhGroupLabel = Ti.UI.createLabel({
		text : "Wind Chill: " + dbArray[0].windchill + "  " + "Precipitation: " + dbArray[0].rain + "  " + "Heat Index: " + dbArray[0].heat_index,
		backgroundColor : "#f2c641",
		color : "#fff",
		height : 100,
		width : "100%",
		textAlign : "center",
		font : {
			fontSize : 20
		}
	});

	win.add(cityLabel);
	win.add(tempLabel);
	win.add(weatherLabel);
	win.add(fourthGroupLabel);
	win.add(fifthGroupLabel);
	win.add(sixthGroupLabel);
	win.add(seventhGroupLabel);

	win.open();
};

exports.buildUI = buildUI;
