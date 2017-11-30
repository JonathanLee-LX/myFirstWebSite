var http  = require("http");

var parse = function(url){
	var query = url.split("?")[1];
	var pairs = query.split("&");
	for(var i = 0; i<pairs.length;i++){
		var pair = pairs[i].split("=");
		var name = decodeURIComponent(pair[0]);
		var value = decodeURIComponent(pair[1]); 
		console.log("name = "+name+"value = "+value);
	}
}

var onRequest = function(req,res){
	var url = req.url.toString();
	var pairs = parse(url);
	res.writeHead(200,{"Content-Type":"text/html"});
	res.end("has receive");
};


http.createServer(onRequest).listen(9000,function(){
	console.log("listenning 9000 port..")
})