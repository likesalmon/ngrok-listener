var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  console.log("req.ip", req.ip);
  console.log("req.ips", req.ips);
  console.log("req.body", req.body);
  res.sendStatus(200);
});

router.post("/", function(req, res, next) {
  console.log("req.ip", req.ip);
  console.log("req.ips", req.ips);
  console.log("req.body", req.body);
  console.log("req.headers", req.headers);
  res.sendStatus(200);
});

module.exports = router;
