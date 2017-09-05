window.onload = function(){
	var bt1 = document.getElementById('_bt1');

	bt1.addEventListener('click', function() {
		var xhr = new XMLHttpRequest();

		xhr.open("GET","https://slack.com/api/api.test",true);
		xhr.addEventListener('load',function() {
			if(xhr.status ===200){
				alert("We got data: " + xhr.respose);
			}
			else{
				dump("Error loading page\n");
			}
		},false)

		//xhr.overrideMimeType('text/json');
		xhr.send();	
	})	
}
