// edit dependencies in package.json before npm installing
var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public/dist/public'))

// if using form data
var bodyParser = require("body-parser");
app.use(bodyParser.json({ extended: true }));

require("./server/config/routes")(app)

// if not using sockets
app.listen(8000, function() {
    console.log("listening on port 8000");
})