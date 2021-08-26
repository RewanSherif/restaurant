var express = require("express"); 
var app = express(); 
var mongoose = require("mongoose");
var bodyParser = require("body-parser"); 

mongoose.connect("mongodb://localhost/hotel").then(()=> console.log("connected")).catch(err => console.log(err))


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require("./api/routes/routes");
routes(app);

app.listen(3000, function() {
  console.log("server now is running in port 3000 ");
});
