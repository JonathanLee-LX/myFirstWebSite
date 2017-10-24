$(function(){
	var len=$(".slider-img").length,
	index=0,
	tId;
	
	$(document).ready(function(){
		tId=setTimeout(autoSlide,5000);
	});
	
	$("#slide-next").on("click",function(event){
		if(isEnd(index)){
			start();
		}else{
			next();
		}	
	clearTimeout(tId);//清除原来的定时器
	tId=setTimeout(autoSlide,5000);	//重新设置一个定时器
});
	$("#slide-pre").on("click",function(event){
		if(isStart(index)){
			last();	
		} else{
			pre();
		}
		clearTimeout(tId);
		tId=setTimeout(autoSlide,5000);
	});


	function autoSlide(){
		if (isEnd(index)) {
			start();
		}else {		
			next();
		}
		tId=setTimeout(autoSlide,5000);
	}

//判断是否滑动到第一张
function isStart(index){
	if (index<=0) {
		return true;
	}
	return false;
}
//判断是否滑动到最后一张
function isEnd(index){
	if (index==len-1) {
		return true;
	}
	return false;
}

//回到第一张
function start(){
	$(".slider-img").animate({
		left:"+="+(len-1)*1000+"px"
	},300);
	index=0;
}
//回到最后一张
function last(){
	$(".slider-img").animate({
		left:"-="+(len-1)*1000+"px"
	},300);
	index=len-1;
}

//向后滑动一张
function next(){
	$(".slider-img").animate({
		left:"-=1000px"
	},300);
	index++;
}
//向前滑动一张	
function pre(){
	$(".slider-img").animate({
		left:"+=1000px"
	},300);
	index--;
}
});

