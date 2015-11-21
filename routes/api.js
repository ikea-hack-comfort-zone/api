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
  res.json(ret);
});

router.get('/sensor-data', function(req, res) {
  var ret = {
    temp: Math.round(50 * Math.random()),
    mic: Math.round(120 * Math.random()),
    light: Math.round(15 * Math.random())
  };
  res.json(currentData);
});

module.exports = router;
