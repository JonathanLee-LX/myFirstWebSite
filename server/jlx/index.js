var express = require("express");
var app = express();
var sayHello  = function(){
	console.log( "Hello World!" );
	console.log(module.paths);
};

exports.sayHello = sayHello;
sayHello();


