$(document).scroll(function(){
	//$top滚轮滚动距离
	var $top=$(this).scrollTop();
	if ($top>10) {
		// statement
		$(".jl-head").addClass("slideHead");
	}else{
		$(".jl-head").removeClass("slideHead");
	}
});