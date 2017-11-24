var http = require("http");//获取http模块

function onRequest(req,res) {//定义服务器监听得到响应的函数
    var query = req.url.toString().split("?")[1];
    var name = decodeURIComponent(query.split("=")[0]);
    var value = decodeURIComponent(query.split("=")[1]);
        console.log(name+":"+value);
    res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"http://jlx520.xyz:8000"});
    res.write("has receive");//相当于页面的responseText
    res.end();
}

http.createServer(onRequest).listen(8000, function () {//createServer可以传入两个参数(req,res)
    console.log("listening port is 8000....");
});
/*

var express = require('express');
var app = express();

var responsePort = 7000;  // 响应请求的页面跑在7000端口

// 可以改变‘/’为其他的路径，改完之后serverReq.js里面的请求路径也需要改变
app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost'); // 设置允许跨域的origin，允许80端口访问本端口（7000）
 //   res.send("Hello world from CROS.😡");   // 空格部分为表情，可能在编辑器不会显示
    res.send("has receive data : " )
});

app.listen(responsePort, function () {
    console.log('cros_responser is listening on port '+ responsePort);
});
*/
