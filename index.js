var express = require('express');
var routes = require('./routes');

var app = express();

app.use(function(req, res, next){

    console.log('Middleware 1');
    next();
});

app.use(function(req, res, next){

    console.log('Middleware 2');
    next();
});

app.use(function(req, res, next){

    console.log('Middleware 3');
    next();
});

app.use('/api', routes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});