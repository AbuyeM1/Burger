var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create([
    "name", "devour"
  ], [
    req.body.name, req.body.devour
  ], function (result) {

    res.json({ id: result.insertId });
  });
});




// Export routes for server.js to use.
module.exports = router;