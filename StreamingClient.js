

var createStreamingClient = function(url,progress,finished){
	var xhr = new XMLHttpRequest(),received = 0
	xhr.onreadystatechange = function(){
		var results;
		if (xhr.status == 3) {
			// statement
			results += xhr.responseText.substring(received)
			received += results.length
			progress(results)
		}else if (xhr.status == 4) {
			finished(xhr.responseText)
		}
	}
	xhr.open("get",url,true)
	xhr.send(null)
	return xhr
}


var client = createStreamingClient("Streaming.php",function(data){
	alert("Received:" +data)
},function(data){
	alert("Done!")
})
