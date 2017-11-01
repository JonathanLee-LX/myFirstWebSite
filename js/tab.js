$(function(){	
	$("#myTabs li").click(function(e){
		e.preventDefault()
		$(this).tab('show')
	})
	console.log($.support);
})
/*
Boostrap为大部分插件所具有的动作提供自定义事件，一般来说，这些事件都有不定式
和过去式两种动词命名形式，例如，不定式形式的动词（例如show）表示在事件开始
时触发；而过去式动词（例如shown）表示在动作执行完毕之后触发
从3.0.0版本开始，所有Bootstrap事件的名称都采用命名空间方式。
所有以不定式形式的动词命名的事件都提供了preventDefault功能。这个就赋予了你在
动作执行前将其停止的能力。
 */