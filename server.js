const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
var exphbs = require("express-handlebars");
// Import routes and give the server access to them.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});