var createXHR = function(){
	if(typeof arguments.callee.acitveXString != "string"){
		var versions  = ["MSXL2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],l,len
		for(var i =0,len=versions.length;i<len;i++){
			try{
				new ActiveXObject(versions[i])
			}catch (ex){
				//跳过
			}
		}
	}else if (typeof ActiveXObject != "undefinded") {
		
	}
	return new ActiveXObject
}


var xhr = new XMLHttpRequest();
xhr.open("get","example.php",false)
xhr.onreadystatechange=function (){
	if (xhr.readyState == 4) {
		// statement
		if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
			alert(xhr.responseText)
		}else{
			alert("Request  was unsuccessful: " + xhr.status)
		}
	}
}
xhr.send(null)

//GET请求
//查询字符串的名称和值都需要使用encodeURIComponent()进行编码，然后才能放到URI
//的末尾，而且所有名值对必须由和号（&）分隔
function addParam(url,name,value){
	url += url.indexOf("?")==-1?"?":"&"
	url += encodeURIComponent(name)+"="+encodeURIComponent(value)
	return url
}


function handleResponse(response){
	alert("You're at IP address "+ response.ip+", which is in "+response.city+","+response.region_name)

}
var script = document.createElement("script")
script.src = "http://freegeoip.net/json/?callback=handleResponse"
document.body.insertBefore('script',document.body.firstChild)