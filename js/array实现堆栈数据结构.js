/*
 js实现栈和队列数据结构

*/
var arr =[2,1,5,23,5,6]
arr.sort()


var arr =[]
arr.some(function(){})
//迭代方法
//every()对数组中每一项运行给定的函数，如果每一项都返回true，则最终返回true
//forEach()对数组中每一项运行给定的函数，这个函数没有返回值
//filter()对数组中每一项运行给定的函数，返回一个由返回值为true的值组成的数组
//some()对数组中每一项运行给定函数，如果该函数有一项返回true，那么返回值就为true
//map()对数组中没一项运行给定函数，返回每次函数调用的结果组成的数组
//
var arr =[1,2,3,4,,5,6]
arr.every(function(val){
	retunr val<10?true:false;
})

var map = arr.map(function(){
	return arguments[0]+1
})

var arr =[2,1,5,23,5,6]
arr.reduce(function(val1,val2,index,arr){
	console.log("val1:"+val1+"||"+"val2:"+val2)
	console.log("index:"+index)
	return val1+val2
},0)

