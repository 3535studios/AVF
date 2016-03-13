//background color for app
Ti.UI.setBackgroundColor("#000");

/* app story
 * // app launch
 // check network connectivity
 // if no then alert
 // if yes call geolocation data
 // require api module
 // pass lat, lng to api module
 // catch lat, lng in api module
 // require ui module
 // pass api data points to ui module
 // catch data points in ui module
 // display ui
 * */

if (Ti.Network.online === true) {
	// imports geoModule and makes global then fires getGeo function
	var geoModule = require("geo");
	geoModule.getGeo();

} else {
	alert("Please check your network connection");
}
