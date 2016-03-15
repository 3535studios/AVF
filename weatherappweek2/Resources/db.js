//collects that data that comes from wunderground

//Save the database
var save = function(apiInfo) {
	console.log(save);
	var db = Ti.Database.open('weatherdb');
	db.execute('CREATE TABLE IF NOT EXISTS weatherTbl (id INTEGER PRIMARY KEY, city TEXT, temp_f INTEGER, weather TEXT, relative_humidity TEXT, wind_mph TEXT, feelslike_f TEXT, wind_dir TEXT, wind_gust_mph TEXT, wind_degrees TEXT, visibility_mi TEXT, pressure_in TEXT, dewpoint_f TEXT, windchill_f TEXT, precip_today_in TEXT, heat_index_f TEXT)');
	db.execute('INSERT INTO weatherTbl (city, temp_f, weather, relative_humidity, wind_mph, feelslike_f, wind_dir, wind_gust_mph, wind_degrees, visibility_mi, pressure_in, dewpoint_f, windchill_f, precip_today_in, heat_index_f) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', apiInfo.city, apiInfo.temp, apiInfo.weather, apiInfo.humidity, apiInfo.wind, apiInfo.feelslike, apiInfo.wind_dir, apiInfo.wind_gust_mph, apiInfo.wind_degrees, apiInfo.visibility, apiInfo.pressure, apiInfo.dewpoint, apiInfo.windchill, apiInfo.rain, apiInfo.heat_index);
	db.close();
	read();
};

exports.save = save;


var read = function() {
	console.log(read);
	var db = Ti.Database.open('weatherdb');
	db.execute('CREATE TABLE IF NOT EXISTS weatherTbl (id INTEGER PRIMARY KEY, city TEXT, temp_f INTEGER, weather TEXT, relative_humidity TEXT, wind_mph TEXT, feelslike_f TEXT, wind_dir TEXT, wind_gust_mph TEXT, wind_degrees TEXT, visibility_mi TEXT, pressure_in TEXT, dewpoint_f TEXT, windchill_f TEXT, precip_today_in TEXT, heat_index_f TEXT)');
	var dbRows = db.execute('SELECT city, temp_f, weather, relative_humidity, wind_mph, feelslike_f, wind_dir, wind_gust_mph, wind_degrees, visibility_mi, pressure_in, dewpoint_f, windchill_f, precip_today_in, heat_index_f FROM weatherTbl');
	if (dbRows.rowCount > 0) {
		var dbArray = [];
		while (dbRows.isValidRow()) {
			var dbInfo = {
				city : dbRows.fieldByName('city'),
				temp : dbRows.fieldByName('temp_f'),
				weather : dbRows.fieldByName('weather'),
				humidity : dbRows.fieldByName('relative_humidity'),
				wind : dbRows.fieldByName('wind_mph'),
				feelslike : dbRows.fieldByName('feelslike_f'),
				wind_dir : dbRows.fieldByName('wind_dir'),
				wind_gust : dbRows.fieldByName('wind_gust_mph'),
				wind_degrees : dbRows.fieldByName('wind_degrees'),
				visibility : dbRows.fieldByName('visibility_mi'),
				pressure : dbRows.fieldByName('pressure_in'),
				dewpoint : dbRows.fieldByName('dewpoint_f'),
				windchill : dbRows.fieldByName('windchill_f'),
				rain : dbRows.fieldByName('precip_today_in'),
				heat_index : dbRows.fieldByName('heat_index_f')
			};
			dbArray.push(dbInfo);
			dbRows.next();
		}
		var uiModule = require("ui");
		uiModule.buildUI(dbArray);
	}
	dbRows.close();
	db.close();

};

exports.read = read;


//delete function
 var cleandb = function() {
	var db = Ti.Database.open('weatherdb');
		db.execute('DROP TABLE IF EXISTS weatherTbl');;
		db.close();
};

exports.cleandb = cleandb;



