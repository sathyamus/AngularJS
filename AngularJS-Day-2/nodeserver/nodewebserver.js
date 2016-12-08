var express = require('express');
var cors = require('cors');
var fs = require('fs');

var app = express();

app.use(cors());

//http://IP:PORT/players
app.get('/players', function (req, res) {

	fs.readFile(__dirname + "/" + "player.json", 'utf-8', function (err, data) {
		res.end(data);
	});

});


app.listen(8888, function () {
	console.log("server started ");
})