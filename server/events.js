var events = require('events');
var proxy = new events.EventEmitter();
var status = "ready";
var select = function(callback){
	proxy.once('selected',callback);
	if(status === 'ready'){
		status = 'pending';
		db.select("SQL",function(results){
			proxy.emit("selected",results);
			status = "ready";
		})
	}
}

emitter.on("event1",function(message){
	console.log(message)
});

emitter.emit("event1","I am a message");  




