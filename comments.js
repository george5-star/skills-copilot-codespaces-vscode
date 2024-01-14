// Create a web server that can respond to requests for /comments.json
// with a JSON file containing a list of comments. You’ll need to read
// comments.json and convert it to a JavaScript object before responding
// with it. Add an HTTP header of Access-Control-Allow-Origin: * to the
// response.

var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
  console.log("Request made for: " + req.url);
  if (req.url === "/comments.json") {
    fs.readFile("comments.json", function(err, data) {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end("Server error");
        return;
      }
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

server.listen(8080);
console.log("Server listening on port 8080");
