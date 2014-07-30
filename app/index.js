'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');

app.set('views', __dirname + '/views');
app.set('view engine','ejs');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
  res.render('home.ejs');
});

app.get('/checkers', function (req, res){
  res.render('checkers.ejs');
});

var port = process.env.PORT;

app.listen(port, function(){
  console.log('Express is now listening on PORT:', port);
});


