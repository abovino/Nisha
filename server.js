//List of required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');

//Creates the express app
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.engine('handlebars', handlebars({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

//Home page
app.get('/', function(req, res) {
  res.render('index');
});




var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log("Connected to PORT: " + PORT);
});