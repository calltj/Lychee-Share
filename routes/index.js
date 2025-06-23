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
router.get("/features", function (req, res, next) {
  res.sendFile(require("path").join(__dirname, "../public/features.html"));
});
router.get("/pricing", function (req, res, next) {
  res.sendFile(require("path").join(__dirname, "../public/pricing.html"));
});
router.get("/support", function (req, res, next) {
  res.sendFile(require("path").join(__dirname, "../public/support.html"));
});
router.get("/login", function (req, res, next) {
  res.sendFile(require("path").join(__dirname, "../public/login_page.html"));
});
router.get("/create", function (req, res, next) {
  res.sendFile(require("path").join(__dirname, "../public/create.html"));
});
router.get("/reset", function (req, res, next) {
  res.sendFile(require("path").join(__dirname, "../public/reset.html"));
});

module.exports = router;
