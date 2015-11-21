var express = require('express');
var router = express.Router();
var request = require('request');

//hacks on hacks on hacks
var currentData = {};

router.post('/submit' ,function(req, res) {
  var sensor = req.body.sensor;
  var temp = req.body.temp;
  var mic = req.body.mic;
  var light = req.body.light;

  var ret = {temp: temp, mic: mic, light: light};
  currentData[sensor] = ret;
  console.log("data is now: ", currentData);
  res.json(ret);
});

router.get('/sensor-data', function(req, res) {
  res.json(currentData);
});

module.exports = router;
