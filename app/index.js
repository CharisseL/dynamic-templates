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

app.get('/checkers', function(req, res){
  res.render('checkers.ejs');
});

app.get('/add/:x/:y/:w/:z', function(req,res){
  req.params.x *= 1;
  req.params.y *= 1;
  req.params.w *= 1;
  req.params.z *= 1;
  
  console.log(req.params, req.query);
  req.params.a *= 1;
  req.params.b *= 1;
  req.params.c *= 1;
  req.params.d *= 1;
 
  req.params.fontsize = req.query.fontsize;
  req.params.color = req.query.color;
  req.params.border = req.query.border;
  res.render('sum', req.params);
});


app.get('/sumlist/:nums', function(req, res){
  var nums = req.params.nums.split(',');

  nums = nums.map(function(n){
    return n * 1;
  });

  var sum = 0;
  for(var i = 0; i < nums.length; i++){
    sum += nums[i];
  }

  res.render('list', {nums:nums, sum:sum, even:req.query.even, odd:req.query.odd});
});

app.get('/dice/:roll', function(req, res){
  var roll = req.params.roll *1;
  var row = Math.ceil(roll /10);
  var rolls = [];

  for(var i = 0; i < roll; i++){
    rolls.push(Math.floor(Math.random() * 6) +1);
  }

   var sum = rolls.reduce(function(a,b){return a +b;});
   res.render('dice', {rolls:rolls, row:row, sum:sum});
  });


var port = process.env.PORT;

app.listen(port, function(){
  console.log('Express is now listening on PORT:', port);
});


