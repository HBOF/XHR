window.onload = function(){
	var bt1 = document.getElementById('_bt1');

	bt1.addEventListener('click', function() {
		var xhr;
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		} else if (window.ActiveXObject){
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		var buf;
		var _ip;
		xhr.open("GET","https://httpbin.org/get",true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.addEventListener('load',function() {
			if(xhr.status ===200){
				buf = this.responseText;
				_ip = JSON.parse(buf).origin;

				document.write("<div style=\"text-align: center;\">We got data! <br/><br/></div>" + buf+"<div style=\"text-align: center;\"><br/><br/>final<br/><br/></div>");
				document.write("<div style=\"text-align: center;font: bold italic 2.0em/1.0em consolas;\"> Your IP is "+_ip+"<br/><br/></div>")
			}
			else{
				document.write("Error loading page\n");
			}

		},false);

		xhr.overrideMimeType('text/json');
		xhr.send();
	});	
}
