var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendFile(require("path").join(__dirname, "../public/index.html"));
});
router.get("/download", function (req, res, next) {
  res.sendFile(require("path").join(__dirname, "../public/download.html"));
});
router.get("/business-plan", function (req, res, next) {
  res.sendFile(require("path").join(__dirname, "../public/business-plan.html"));
});

module.exports = router;
