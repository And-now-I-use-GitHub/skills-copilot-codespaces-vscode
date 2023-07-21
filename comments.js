// create web server
// create a web server using http module
var http = require('http');
// create a web server using http module
var server = http.createServer(function (req, res) {
    // set the response header
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // set the response content
    res.write('<html><body><p>This is home Page.</p></body></html>');
    res.end();
});
// listen to the port
server.listen(5000);
console.log('Node.js web server at port 5000 is running..');
// create web server
// create a web server using express module
var express = require('express');
// create express app
var app = express();
// setup the server port
var port = process.env.PORT || 5000;
// set the route
app.get('/', function (req, res) {
    // set the response
    res.send('Hello World with Express');
});
// listen to the port
app.listen(port, function () { return console.log("Listening on port " + port); });
// create web server
// create a web server using express module
var express = require('express');
// create express app
var app = express();
// setup the server port
var port = process.env.PORT || 5000;
// set the route
app.get('/', function (req, res) {
    // set the response
    res.send('Hello World with Express');
});
// listen to the port
app.listen(port, function () { return console.log("Listening on port " + port); });
// create web server
// create a web server using express module
var express = require('express');
// create express app
var app = express();
// setup the server port
var port = process.env.PORT || 5000;
// set the route
app.get('/', function (req, res) {
    // set the response
    res.send('Hello World with Express');
});
// listen to the port
app.listen(port, function () { return console.log("Listening on port " + port); });
// create web server
// create a web server using express module
var express = require('express');
// create express app
var app = express();
// setup the server port
var port = process.env.PORT || 5000;
// set the route
app.get('/', function (req, res) {
    // set the  response
    res.send('Hello World with Express');
}
// listen to the port
app.listen(port, function () { return console.log("Listening on port " + port); });