var http = require('http'),
  fs = require('fs'),
  port = 5555

var txt = fs.readFileSync('server/lx.txt', 'utf8')
console.log(txt)
// http.createServer([requestListener])该函数用来创建一个服务器，并将requestListener作为request事件的监听函数（会自动添加）
http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost')
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  res.write(txt, 'utf8', function () { console.log('has been write') })
  res.end()
}).listen(port, function () {
  console.log('has running ' + port)
})
