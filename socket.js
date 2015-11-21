module.exports = function(server)
{
  var request = require('request');

  var io = require('socket.io').listen(server);

  return io
}