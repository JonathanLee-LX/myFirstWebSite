//获取展示列表的li元素
//模拟一个mouseover事件
//在目标li元素上触发mouseover事件
var lis = document.querySelectorAll(".video-list-item")
var handle = function(item){
	alert("hahah")
}
lis.forEach(function(item,index,array){
	item.addEventListener("mouseover",handle(item))
})

