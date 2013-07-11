var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var str = fs.readFileSync("index.html/",encoding);
  var buf = new Buffer();
  var str2 = buf.toString(str);
  response.send(str2);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
