Package.describe({
  name: 'mkarliner:mqtt',
  version: '0.0.5',
  summary: 'Connect Meteor to MQTT message broker',
  git: 'http://www.github.com/mkarliner/meteor-mqtt',
  documentation: 'README.md'
});

Npm.depends({
	"mqtt": "1.0.10"
	
})

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('mkarliner:server.js', ["server"]);
  api.addFiles(['browserMqtt.js'], "client");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mkarliner:mqtt');
  api.addFiles('mkarliner:mqtt-tests.js');
});
