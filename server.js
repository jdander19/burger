var express = require("express");

var path = require('path');
var PORT = process.env.PORT || 3000;


var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

var Router = require('./controllers/burgers_controller');
var router = new Router(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public'))); 

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

router.start();

app.listen(PORT, () => {
  console.log('Server started listening on port ' + PORT);
});