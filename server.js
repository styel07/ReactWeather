var express = require('express');

// create out app
var app = express();

// static specifies the folder name that exposes the main foler
app.use(express.static('public'));

app.listen(3000, function() {
  console.log('server is up on port 3000');
});