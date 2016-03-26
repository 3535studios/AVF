//collects data from api

var save = function(stores){
	//console.log(stores);
	var db = Ti.Database.open('walmartdb');
	for(i=0,j=stores.length; i<j; i++) {
		db.execute('CREATE TABLE IF NOT EXISTS storeTbl (id INTEGER PRIMARY KEY, name TEXT, address TEXT, city TEXT, zip INTEGER, phone INTEGER)');
		db.execute('INSERT INTO storeTbl (name, address, city, zip, phone) VALUES(?,?,?,?,?)',stores[i].name, stores[i].address, stores[i].city, stores[i].zip, stores[i].phone);
	}

	db.close();
	console.log(save);
	read();
};

exports.save = save;

var read = function(){
		//console.log(read);
	var db = Ti.Database.open('walmartdb');
	db.execute('CREATE TABLE IF NOT EXISTS storeTbl (id INTEGER PRIMARY KEY, name TEXT, address TEXT, city TEXT, zip INTEGER, phone INTEGER)');
	var dbRows = db.execute('SELECT name, address, city, zip, phone FROM storeTbl');
	if (dbRows.rowCount > 0) {
		
		var storeArray = [];
		while (dbRows.isValidRow()) {
			var storeInfo = {
				name : dbRows.fieldByName('name'),
				address : dbRows.fieldByName('address'),
				city : dbRows.fieldByName('city'),
				zip : dbRows.fieldByName('zip'),
				phone : dbRows.fieldByName('phone')
			};
			//console.log(storeInfo);
			storeArray.push(storeInfo);
			dbRows.next();
		}
		
		var ui = require("ui");
			ui.storeUI(storeArray);
	}
	dbRows.close();
	db.close();

};

exports.read = read;

//delete function
 var cleandb = function() {
	var db = Ti.Database.open('walmartdb');
		db.execute('DROP TABLE IF EXISTS storeTbl');;
		db.close();
};

exports.cleandb = cleandb;