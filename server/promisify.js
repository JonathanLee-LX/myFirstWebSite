res.setEncoding("utf8");
res.on('data',function(){})
res.on('end',function(){})
res.on('error',function(){})


res.then(function(){
//Done
},function(){
//Error
},function(){
//Process
});


var promisify = function(res){
	var deferred = new Deferred();
	var result = '';
	res.on('data',function(chunk){
		result += chunk;
		deferred.progress(chunk);
	});
	res.on('end',function(chunk){
		deferred.resolve(result);
	});
	res.on('error',function(chunk){
		deferred.reject(err);
	});
	return deferred.promise;
}





