function print_user_input(input) {
    return input;
}

module.exports = print_user_input;


/*var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// create db name emp_details
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/employees";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});


// Connecting to Newly created DB
mongoose.connect("mongodb://localhost:27017/employees", {useNewUrlParser: true }); // DB Name - employees


var urltodb = "mongodb://localhost:27017/";

MongoClient.connect(urltodb, function(err, db) {
  if (err) throw err;
  var dbo = db.db("employees");

  dbo.createCollection("emp_details", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});*/

