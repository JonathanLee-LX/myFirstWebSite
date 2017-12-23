var http = require('http')
// server 对象继承自EventEmitter
var server = new http.Server()
server.on('request', function(req, res){
	res.writeHead(200,{'Content-Type' : 'text/plain'})
	console.log()
	res.write('hello node.js')
	res.statusCode = 404
	res.end()
})
server.listen(3000,function(){
	console.log('has been running in ' + 3000 )
})
