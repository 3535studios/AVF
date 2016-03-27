/* Wal-Mart Store Locator App Story *
*   check network connectivity (app.js)
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

//main background for the app
Ti.UI.setBackgroundColor('#000');

if(Ti.Network.online === true) {

//added acs application-account login code
var Cloud = require('ti.cloud');

Cloud.debug = true;
var loginUser = function(){
	Cloud.Users.login({
		login: 'admin',
		password: '759U54s5Ds^4'
	}, function(e){
		
		if (e.success){
			var user = e.users[0];
			Ti.API.info('Success!\n' + 
				'ACS User ID: ' + user.id + '\n' + 
				'ACS App sessionId: ' + Cloud.sessionId + '\n' + 
				'ACS App Username: ' + user.username);
		} else {
			alert((e.error && e.message) || JSON.stringify(e));
		}
	});
}; 
loginUser();

	

} else {
	alert("Your network connection appears to be offline.  Please check your network connection. Reading from local storage.");
	var dbModule = require("read");
		dbModule.read();
}

//checks to see if Location Services are enabled
if (Ti.Geolocation.locationServicesEnabled) {
    // perform other operations with Ti.Geolocation
    var geoModule = require("geo");
		geoModule.getGeo();
} else {
    alert('Please enable location services');
}
