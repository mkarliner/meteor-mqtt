
Meteor package for MQTT.js npm module.

MQTT.js mqtt client package with both server and client API's working.

Basic Usage:

var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org');
 
client.subscribe('presence');
client.publish('presence', 'Hello mqtt');
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString());
});
 
client.end();

See: https://www.npmjs.com/package/mqtt for full API
