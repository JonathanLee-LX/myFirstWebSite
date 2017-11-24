//斐波那契数列 栈操作
function feb(n){
	if (n>2) {
		//statement
		return feb(n-1)+feb(n-2)
	}else{
		switch (n) {
			
			case 1:
			return 1;
				// statements_1
				break;
				default:
				return 0
				// statements_def
				break;
			}
		}
	}
	currentTime=Date.now()
	var sum=feb(40)
	endTime=Date.now()
	console.log(sum)
	console.log(endTime-currentTime+"ms")

//数组的常用算法
function getMax(arr){
	var max=arr[0]
	for(var i=1;i<arr.length;i++){
		if(arr[i]>max) max=arr[i]
	}
return 	max
}