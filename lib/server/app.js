var express = require("express");
var app = express();
var index = require('./routes/index');
var hello = require('./routes/welcome');
var parts = require('./routes/parts');
var bodyParser = require('body-parser');
var port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.get('/hello', hello); //changed to hello

app.use('/parts', parts);

app.get('/', index);

app.use(express.static('lib/public'));

app.listen(port);
console.log("Listening on port: ", port);
