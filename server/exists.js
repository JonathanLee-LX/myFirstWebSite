var fs = require('fs')
if (fs.statSync('lx.txt')) {
  fs.stat('wpl.txt', function (exists) {
    console.error(exists ? "It's there" : "It's not here")
  })
}


// 注意不要在open方法之前调用stat方法，open方法本身就可以检查文件是否存在
