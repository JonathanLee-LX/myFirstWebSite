var http = require('http'),
  fs = require('fs')

var txt = fs.readFileSync('./lx.txt', 'utf8')
http.createServer(function (req, res){
  switch (req.url) {
    case '/':
      res.writeHead(200, {'Cotent-Type': 'text/plain'})
      res.write(txt)
      break
    case '/date':
      var date = new Date()
      res.writeHead(200, {'Content-Type': 'text/plain'})
      res.set('Access-Control-Allow-Origin', 'http://localhost')
      res.write(date.toString())
      break
  }
  res.end()
}).listen(9000, function () {
  console.log('has running')
})
