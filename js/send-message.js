var sendMessage = function(){
	var xhr = new XMLHttpRequest()
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){	
			if((xhr.status >=200&&xhr.status <300)||xhr.status == 304){
				console.log(xhr.responseText)
			}else {
				console.log("XMLHTTPRequest is erro"+xhr.status)
			}
		}
	}
	xhr.open("post","http://localhost:9000",true)
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
	xhr.send(query)
}

var form = document.forms[0];
var query = serialize(form);//序列化表单中的字段
var sendBtn =document.getElementById("send")
sendBtn.onclick = function(){
	sendMessage();
}
