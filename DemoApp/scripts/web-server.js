var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(_dirname + '/../');

app.use(express.static(roothPath + '/app'));

app.listen(8000);

console.log("Listening on port 8000...");