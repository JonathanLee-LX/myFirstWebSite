var http = require('http')
var fs = require('fs')
var url = require('url')

var port = 8000
var onRequest = function(req, res){
    var path = url.parse(req.url)
/*  var params = query.split("&")
    var obj = {}
    for(var i = 0; i < params.length ; i++){
      var couple = params[i].split('=')
      couple = decodeURIComponent(couple)
      var key = couple[0]
      var value = couple[1]
      obj[couple[0]] = couple[1]
    }
    console.log(params)
*/
    var body = ""
    req.on('data', function (chunk) {
      body += chunk
    })
    req.on('end', function () {
      res.setHeader('Access-Control-Allow-Origin',"*")
      res.writeHead(200, {
        'Content-Type' : 'text/html'
      })
      //原生js的string没有replaceAll方法，但是可以使用全局正则表达式
      body = body.replace(/\+/g,' ')
      res.write(html)
      res.end()
    })
}

var html = ''

fs.readFile('./form-demo.html', function (err,data) {
  html += data
})

var stream = fs.createReadStream('./form-demo.html')
stream.on('data', function (chunk){
  console.log(chunk)
})
stream.on('end', function () {
  console.log('finished')
})

http.createServer(onRequest).listen(port,function(){
  console.log('has runnning '+ port +'...')
})
