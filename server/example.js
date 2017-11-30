var http = require("http");//获取http模块
var url = require("url")
var path = require("path")
var fs = require("fs")
var querystring = require('querystring')

/*
function onRequest(req,res) {//定义服务器监听得到响应的函数
    var query = req.url.toString().split("?")[1];
    var name = decodeURIComponent(query.split("=")[0]);
    var value = decodeURIComponent(query.split("=")[1]);
    console.log(name+":"+value);
    res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"*"});
        res.write("has receive"+value);//相当于页面的responseText
        res.end();
        console.log(e);
    }
    */
//获取req的请求方式
/*
function getReqMethod(req,res){
    switch(req.method){
        case "POST":
        update(req,res);
        break;
        case "PUT":
        create(req,res);
        break;
        case "DELETE":
        remove(req,res)
        break;
        case "GET":
        default:
        get(req,res);
        break;
    }
}
function get(req,res){
    var pathname = url.parse(req.url).pathname
    fs.readFile(path.join(ROOT,pathname),function(err,file){
        if(err){
            res.writeHead(404);
            res.end("找不到相关文件")
            return;
        }
        res.writeHead(200);
        res.end(file);
    })
}

function getQuery(){   
//查询字符串
var query = querystring.parse(url.parse(req.url).query)//获取查询字符串
//使用下面这种也可以，url.parse(req.url,boolean)若第二个参数的值为true，那么解析url对象中query也会是一个对象
//var query = url.parse(req.url,true).query;
return query;
}
*/
//接收一个req.headers.cookie的数组,并把它解析为一个对象cookies
function parseCookie(cookie){   
    var cookies = {};
    if(!cookie){
        return cookies;
    }
    var list = cookie.split(";")
    for(var i=0;i<list.length;i++){
        var pair = list[i].split("=")
        cookies[pair[0].trim()] = pair[1]
    }
    return cookies;
}

//获取cookie并且解析
var onRequest = function (req,res){
    req.cookies = parseCookie(req.headers.cookie)//将cookie字段解析为cookies对象
    verifyKey(req,res);
    handle(req,res)
};

//将cookie字段序列化为一个字符串
//name和value是必须的,opt是Set-Cookie字段中的可选参数的配置对象。
var serializeCookie = function(name,value,opt){
    var pairs = [name+"="+value];
    opt = opt?opt:{};
    if(opt.path) pairs.push("path="+opt.path);
    if(opt.expires) pairs.push("expires="+opt.expires.toUTCString());
    if(opt.maxAge) pairs.push("maxAge="+opt.maxAge);
    if(opt.domain) pairs.push("domain="+opt.domain);
    if(opt.httpOnly) pairs.push("httpOnly="+opt.httpOnly);
    if(opt.secure) pairs.push("secure="+opt.secure);
    return pairs.join(";");
};


http.createServer(onRequest).listen(8000, function () {//createServer可以传入两个参数(req,res)
    console.log("listening port is 8000....");
});

//根据req.cookies中的cookie中的数据，做出合适的回应
var handle = function(req,res){
    if(!req.cookies.isVisit){
           //配置cookie的可选参数
           var opt = {
           }
        //设置cookie字段
        //多个cookie字段可以通过数组传入
        res.setHeader("Set-Cookie",[serializeCookie("isVisit",1,opt),serializeCookie("haha",2)]);
        res.writeHead(200,{'Content-Type':"text/html"});
        res.write('<head><meta charset="utf-8"/></head>'); 
        res.end("欢迎第一次来到我的网站！！！")
    }else{
       res.writeHead(200,{'Content-Type':"text/html"});
       res.write('<head><meta charset="utf-8"/></head>'); 
       res.end("欢迎回来！！！")
   }
};

//创建一个session的集合对象sessions
var sessions = {};
//创建一个默认的session口令，这个值可以随意约定
var key = 'session_id';
//设置过期时间为20分钟
var EXPIRES = 20*60*1000;

var generate = function(){
    var session = {};
    //生成一个唯一不重复session.id值，##(new Date()).getTime()的值会越来越大，所以永远不会重复##
    session.id = (new Date()).getTime() + Math.random();
    session.cookie = {
        //为session.cookie的设置过期时间
        expire: (new Date()).getTime() + EXPIRES,
    };
    //将这个session对象，通过唯一的session.id属性挂载在sessions对象上
    sessions[session.id] = session;
    return session;
}

//验证客户端发来的cookie中key是否和服务器中的session的默认key一致并且是否过期
var verifyKey = function (req,res){
    var id  = req.cookies[key];
    if(!id){
        req.session = generate();
        setSessionCookie(req,res);
    }else{
        var session = sessions[id];
        if(session){
            if(session.cookie.expire > (new Date().getTime())){
                //每次验证后，都需要更新一下expire值
                session.cookie.expire = (new Date()).getTime() + EXPIRES;
            }else{
                //超时了，删除旧的session数据
                delete sessions[id];
                req.session = generate();
                setSessionCookie(req,res);
            }
        }else{
            req.session = generate();
            setSessionCookie(req,res);
        }
    }
}

//仅仅在服务器段重新生成session还不够，还需要在响应给客户端时设置新的值，以便下次能够对应验证服务端的数据
var setSessionCookie = function(req,res){
    var writeHead = res.writeHead;
    res.writeHead = function(){
        var cookies = res.getHeader("Set-Cookie");
        var session = serializeCookie(key,req.session.id);
        //把session的cookie字段加入到cookies中
        cookies = Array.isArray(cookies) ? cookies.concat(session) : [cookies,session]
        res.setHeader("Set-Cookie",cookies);
        return writeHead.apply(this,arguments);//将res.writeHead()方法还原
    }
}


//采用专门的缓存服务，Session需要异步的方式获取，代码就需要略作调整，变成异步的方式。
/*
var onRequest = function(req,res){
    var id = req.cookies.id;
    if(!id){
        req.session = generate(req,res);
        handle(req,res);
    }else{
        //从专用缓存中获取指定id的session
        store.get(id,function(err,session){
            if(session){
                if(session.cookie.expire > (new Date()).getTime()){
                    //更新超时时间
                    session.cookie.expire = (new Date()).getTime() + EXPIRES;
                    req.session = session;
                }else{
                    delete sessions[id];
                    req.session = session;
                }
            }else{
                //如果session过去或口令不对，重新生成session
                req.session = generate();
            }
            handle(req,res);
        });
    }
}

var writeHead  = res.writeHead;
res.writeHead = function(){
    var cookies = res.getHeader("Set-Cookie");
    var session = 
}

*/


/*
var express = require('express');
var app = express();

var responsePort = 8000;  // 响应请求的页面跑在7000端口

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
