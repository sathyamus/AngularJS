var app = require('./restapi');

app.set('port', process.env.PORT || 9999);

var server = app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + server.address().port);
});