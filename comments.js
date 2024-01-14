// Create a web server that can respond to requests for /comments.json with a 
// JSON representation of the comments list used in your previous assignment.

var http = require('http');
var comments = require('./comments');
var port = 8080;

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(comments));
});

server.listen(port);
console.log('Server running on port ' + port);