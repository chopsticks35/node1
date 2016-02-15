// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var exportObject = require('./fileSystem');

// Create Express App Object \\
var app = express();

// use function - custom middle ware before static \\
// app.use(function(req, res, next){
//     console.log('${req.method} request for ');
// });

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.header('Content-Type', 'text/html')
  res.send(exportObject.fileContents)
});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

});