$(function(){
	var len=$(".slider-img").length,
	index=0,
	tId,
	$index,
	deltaIndex,
	$dot=$(".dot"),
	$width=$(document).width();//获取页面的宽度
	
	$(document).ready(function(){
//		tId=setTimeout(autoSlide,5000);
		reSetTid();
	});
	//为dot绑定点击事件
	$dot.on("click",function(event){
		$index=$dot.index($(this));//获取被点击的dot的index
		deltaIndex=$index-index;
	//	alert("deltaIndex"+deltaIndex+"index"+index+"$index"+$index);
	move();
});

	function move(){
		if(deltaIndex>=0){
			next();
		}else{
			prev();
		}
	}

	$("#slide-next").on("click",function(event){
		if(isEnd()){
			deltaIndex=1-len;
			prev();
		}else{
			deltaIndex=1;
			next();
		}
	});
	$("#slide-prev").on("click",function(event){
		if(isStart()){
			deltaIndex=len-1;	
			next();
		}
		else{
			deltaIndex=-1;
			prev();
		}
	});


	function autoSlide(){
		if (isEnd(index)) {
			deltaIndex=1-len;
			prev();
		}else {	
			deltaIndex=1;	
			next();
		}
	}

//判断是否滑动到第一张
function isStart(){
	if (index<=0) {
		return true;
	}
	return false;
}
//判断是否滑动到最后一张
function isEnd(){
	if (index>=len-1) {
		return true;
	}
	return false;	
}

//向后滑动
function next(){
	$(".slider-img").animate({
		left:"-="+$width*Math.abs(deltaIndex)+"px"
	},300);
	index+=deltaIndex;
	moveDot();
	reSetTid()
}
//向前滑动	
function prev(){
	$(".slider-img").animate({
		left:"+="+$width*Math.abs(deltaIndex)+"px"
	},300);
	index+=deltaIndex;
	moveDot();
	reSetTid();
}
//移动改变点的位置moveDot();
function moveDot(){
	$(".dot").eq(index).addClass("current").siblings().removeClass("current");
}
function reSetTid(){
	clearTimeout(tId);//清除原来的定时器
	tId=setTimeout(autoSlide,5000);	//重新设置一个定时器
}

});
