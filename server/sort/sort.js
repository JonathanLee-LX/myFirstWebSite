//Array对象的sort方法就是一个典型的高阶函数，他可以接收一个方法作为参数参与运算排序
Array.prototype.sort = function(func){
	for(var arr = this,len = this.length,i = 0; i<len; i++){
		for(var j = i+1; j<len ; j++){	
			var flag = func(arr[i],arr[j]);
			if(flag > 0){
				var item = arr[i];
				arr[i] = arr[j];
				arr[j] 	= item;
			}
		}
	}
	return arr;
}

var arr = [2,4,6,1,2.5,89,23];

var correct = arr.sort(function(item1,item2){
	return item1-item2;
});

console.log(correct);


exports.sort = sort;

