
/**
 *Create a Node-style callback that will resolve or reject the deferred
 *promise .
 *@return a nodeback
 * 
 */
defer.prototype.makeNodeResolver = function(){
	var self = this;
	return function(error,value){
		if(error){
			self.reject(error);
		}else if(arguments.length > 2){
			self.resolve(array_slice(arguments,1));
		}else{
			self.resolve(value);
		}
	}
}

/**
 *文件I/O是对标准POSIX函数的简单封装。通过require('fs')使用该模块。所有方法分都有异步和同步的形式
 *异步方法的最后一个参数都是一个回调函数。传给回调函数的参数取决于具体方法，但回调函数的第一个参数都会保留给异常。如果操作成功完后则第一个参数会是
 *null或undefined
 * 
 */