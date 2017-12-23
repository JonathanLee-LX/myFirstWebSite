var fs = require('fs')

fs.writeFile('wpl.txt', '你在哪？我来找你', 'utf8', function (erro, written, str){
  if (erro) throw erro
})

// 同步方法，writeFileSync()
// 同步方法没有回调函数，和异常对象
fs.writeFileSync('lx.txt', 'where are you now?I will be find you.', 'utf8')
