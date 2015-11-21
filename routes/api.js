var express = require('express');
var router = express.Router();
var request = require('request');

// TODO: shove into DB
router.post('/submit' ,function(req, res) {
  var sensor = req.body.sensor;
  var temp = req.body.temp;
  var mic = req.body.mic;
  var light = req.body.light;

  var ret = {temp: temp, mic: mic, light: light};
  res.json(ret);
});

// TODO: pull from DB
router.get('/sensor-data', function(req, res) {
  var ret = {temp: 50 * Math.random(), mic: 120 * Math.random(), light: 15 * Math.random()};
  res.json(ret);
});

module.exports = router;
