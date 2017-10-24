var express = require('express');
var app = express();
var db= require('./db');

var UserController = require('./user/UserController');
app.use('/users', UserController);

module.exports = app;

// app.get('/', function(req, res) {
//     res.send('Hello World');
// });

// app.listen(3000, function() {
//     console.log('Example app listening on port 3000');
// });