//include server dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

//require Article Schema
var Article = require("./models/Article");

//create instance of Express
var app = express();
//sets an initial port.
var PORT = process.env.PORT || 3000;

//run Morgan for logging
app.use(logger("dev"));
//run body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
//serving static files from public directory
app.use(express.static("public"));

//----------------------------------------------------------------------

//MongoDB configuration 
var MONGODB = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
mongoose.connect(MONGODB);
var db = mongoose.connection;

db.on("error", function(err) {
	console.log("Mongoose Error: ", err);
});

db.once("open", function() {
	console.log("Mongoose connection successful.");
});

//----------------------------------------------------------------------

//not sure if I have to put routes here, because they're in the routes folder. Will require them
var routes = require("./app/config/routes");
app.use("/", routes);