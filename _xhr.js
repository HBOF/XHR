window.onload = function(){
	var bt1 = document.getElementById('_bt1');

	bt1.addEventListener('click', function() {
		var xhr
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		} else if (window.ActiveXObject){
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}

		xhr.open("GET","https://slack.com/api/api.test",true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.addEventListener('load',function() {
			if(xhr.status ===200){
				document.write("We got data! <br/><br/>" + xhr.responseText);
			}
			else{
				document.write("Error loading page\n");
			}
		},false)

		xhr.overrideMimeType('text/json');
		xhr.send();	
	})	
}
