// Write your package code here!

mqtt = Npm.require("mqtt");
//var moment = Npm.require("moment");
// var mqttClient = {};
// var clients = {};
//
// MQTT = {
// 	connect: function(url, options){
// 		console.log("just checking");
// 		mqttClient =  mqtt.connect(url, options);
// 		mqttClient.on("connect", publish);
// 		return mqttClient;
// 	}
// }
//
// MQTT.messages = new Meteor.Collection(null);
//
//
//
// function publish(){
// 	console.log("Publishing");
// 	Meteor.publish('messages', function(filter) {
// 	var self = this,
//     ready = false;
// 	console.log("FILTER ", filter);
// 		mqttClient.on("message", function(topic, body) {
// 			console.log(topic + ": " + body);
// 			// build the object to store
// 			var msg = {
// 				message: body.toString(),
// 				topic: topic,
// 				ts: new Date()
// 			};
// 			// add the message to the collection (see below...)
// 			console.log("Message received and understood: ", msg);
// 			self.added("messages", new Date().toString(), msg);
// 			MQTT.messages.insert(msg);
// 		});
// 		self.ready();
// 		ready = true;
// 	});
// }
//
//
//
//
//
//
//
//  Meteor.methods({
// 	 MQTTconnect: function(url, options) {
//
// 	 },
// 	 MQTTsubscribe: function(topic){
// 		 console.log("Client Subscription", topic);
 // 		 mqttClient.subscribe(topic);
 //
 // 	 }
 // });
 //
 // MQTT.connect = function(host) {
 // 	 console.log("I've been called");
 // }
