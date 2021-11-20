var express = require("express");

var router = express.Router();


router.get("/", function(req, res) {
   res.render("index");
});

router.get("/about", function(req, res) {
   res.render("about");
});

router.get("/games", function(req, res) {
   res.render("games");
});

router.get("/news", function(req, res) {
   res.render("news");
});

router.get("/support", function(req, res) {
   res.render("support");
});

router.get("/contact", function(req, res) {
   res.render("contact");
});
module.exports = router;