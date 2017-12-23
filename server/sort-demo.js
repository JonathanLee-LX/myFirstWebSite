var sort = require('sort-jlx');

var arr  = [3,2,6,4,99,124,32,55];

var correct = sort.sort.call(arr,function(item1,item2){
	return item1-item2;
});

console.log(correct)