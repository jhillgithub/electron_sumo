var sumo = require('node-sumo');

var drone = sumo.createClient();

var forward = function() {
  drone.connect(function() {
    drone.postureJumper();
    drone.forward(50);

    setTimeout(function() {
      drone.stop();
    }, 1000);
  });
}
var longJump = function() {
  drone.connect(function() {
    drone.postureJumper();
    drone.drone.animationsLongJump();
  });
}

var sumo = {
  forward: forward,
  longJump: longJump,
  test: function() {console.log("test")}
}

module.exports = sumo;
