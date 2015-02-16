
//mqtt = require("mqttjs");

Meteor.startup(function(){
	MQTT.messages = new Meteor.Collection(null);
	collection =  new Meteor.Collection("messages");
	Meteor.subscribe("messages");
	
	//client = mqtt.connect("ws://192.168.10.22:9001");

	collection.find({}).observe({
	  added: function(item) {
		  MQTT.messages.insert(item);
		  console.log(item);
	  }
	});
	
})



MQTT = {	
	subscribe: function(topic) {
		console.log("Just checking");
		Meteor.call("MQTTsubscribe", topic);

	 
	}
}
