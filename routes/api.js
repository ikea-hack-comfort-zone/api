var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/submit' ,function(req, res) {
  var sensor = req.body.sensor;
  var temp = req.body.temp;
  var mic = req.body.mic;
  var light = req.body.light;

  var ret = {temp: temp, mic: mic, light: light};
  res.json(ret);
});

module.exports = router;