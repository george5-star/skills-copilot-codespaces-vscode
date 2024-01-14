// Create web server application with express
// Execute with node comments.js
// Access in browser at http://localhost:3000

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Welcome to the comments page!');
});

app.get('/comments', function(req, res) {
  res.send('Welcome to the comments page!');
});

app.get('/comments/new', function(req, res) {
  res.send('This page is for making new comments!');
});

app.get('/comments/:id', function(req, res) {
  res.send('This page is for viewing comment ' + req.params.id);
});

app.get('/comments/:id/edit', function(req, res) {
  res.send('This page is for editing comment ' + req.params.id);
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});