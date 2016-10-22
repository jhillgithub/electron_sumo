var sumo = require('node-sumo');

var drone = sumo.createClient();

var connect = drone.connect();

var forward = function() {
  drone.postureJumper();
  drone.forward(50);

  setTimeout(function() {
    drone.stop();
  }, 1000);
}
var backward = function() {
  drone.postureJumper();
  drone.backward(50);

  setTimeout(function() {
    drone.stop();
  }, 1000);
}
var left = function() {
  drone.postureJumper();
  drone.left(50);

  setTimeout(function() {
    drone.stop();
  }, 100);
}
var right = function() {
  drone.postureJumper();
  drone.right(50);

  setTimeout(function() {
    drone.stop();
  }, 100);
}

var longJump = function() {
  drone.postureJumper();
  drone.animationsLongJump();
}

var sumo = {
  connect: connect,
  forward: forward,
  backward: backward,
  left: left,
  right: right,
  longJump: longJump,
  test: function() {console.log("test")}
}

module.exports = sumo;
