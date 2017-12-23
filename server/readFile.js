var fs = require('fs')
fs.readFile('helloworld', 'utf8', function (erro, data) {
  console.log(data)
})
var data = fs.readFileSync('Promise.js', 'utf8')
console.log(data)
fs.rename('Promise.js', 'promise.js', function (erro) {
  console.log(erro)
})
fs.rmdir('../unlink.js', function (erro) {
  console.log(erro)
})
