var fs = require('fs');

fs.readdir(path.join(__dirname,'..'),function(err,files){
	files.forEach(function(filename,index){
		fs.readFile(filename,'utf8',function(err,files){
			console.log(filename)
		});
	})
})
