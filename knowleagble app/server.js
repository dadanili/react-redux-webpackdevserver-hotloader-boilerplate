var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./lib/router');

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));
app.use('/api', router);
app.set('port', process.env.PORT || 4568);
app.listen(app.get('port'));

