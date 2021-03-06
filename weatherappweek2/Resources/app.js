/* weather app story

*
* //check network connectivity (app.js)
* 	if not connect, then alert
* 		if connection is lost then populate ui from local storage
* 	if connected get the geo location data
* 		if no location services alert
* 		if yes then pull geo location data (geo.js)
* //send geo data to api (api.js)
* //send api data to database(db.js)
* //store api data in database (save function)
* 		if database does not exist, create database and populate
* 		if database already exists, delete table contents and populate (delete function)
*  once database is populated, read from database (read function)
* 	populate the ui from database (ui.js)
* */

// universal background color for app
Ti.UI.setBackgroundColor("#000");

if (Ti.Network.online === true) {
	var geoModule = require("geo");
		geoModule.geoData();

} else {
	var localStorage = require("db");
	localStorage.read();
	//alert("Please check your network connection");
}
