var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/hamdast', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/hamdast.html'));
});

app.get('/expo', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/expo.html'));
});

app.get('/energy', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/energy.html'));
});

app.get('/gaz', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/gaz.html'));
});


app.listen(5000);