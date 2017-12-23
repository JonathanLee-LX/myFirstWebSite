const fs = require('fs');
const url = require('url');
/*
fs.unlink('./unlink.js',(err) => {
	if(err) throw err;
	console.log('成功删除');
})
*/

const myURL = url.parse("htttps://jlx520.xyz")
console.log(myURL)
fs.FileReaderSync(new url('file:///C:/inetpub/wwwroot/Ajax/MyBlog/server/Promise.js'));

