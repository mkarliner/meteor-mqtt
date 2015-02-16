Package.describe({
  name: 'mkarliner:mqtt',
  version: '0.0.3',
  summary: 'Connect Meteor to MQTT message broker',
  git: 'http://www.github.com/mkarliner/meteor-mqtt',
  documentation: 'README.md'
});

Npm.depends({
	"mqtt": "1.0.10",
	"moment": "2.4.0"
	
})

Package.onUse(function(api) {
  api.export("mqtt");
	//api.export("MQTTClient");
  //api.use("raix:eventemitter",[ "client", "server"]);
  api.versionsFrom('1.0.3.1');
  api.addFiles('mkarliner:server.js', ["server"]);
  api.addFiles('mkarliner:client.js', ["client"]);
  api.addFiles('client/lib/mkarliner:browserMqtt.js', ["client"]);
  //api.addFiles('mkarliner:browserMqtt.js', "client");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mkarliner:mqtt');
  api.addFiles('mkarliner:mqtt-tests.js');
});
