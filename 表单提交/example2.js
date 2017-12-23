var fs = require('fs')
var http = require('http')

var onRequest = function (req, res) {
  res.writeHead(200,{'Content-Type' : 'text/plain'})
  res.setHeader("Access-Allow-Control-Origin","*")
//  fs.createReadStream('../image/1.jpg').pipe(res)
  res.write("has received...")
  res.end();
}

http.createServer(onRequest).listen(8000,function (){
  console.log('go...')
})
