window.onload = function(){
	function cleardesc() {
	     d = document.getElementById("description");
	     d.innerHTML = "";
	}
	function hover(e) {
	    if (!e) var e = window.event;
	    whichlink = (e.target) ? e.target.id : e.srcElement.id;
	    if (whichlink=="hufu") desc = "护肤";
	    else if (whichlink=="caizhuan") desc = "彩妆";
		else if (whichlink=="xiangfen") desc = "香氛";
		else if (whichlink=="nanshihf") desc = "男士护肤";
		else if (whichlink=="remenss") desc = "热门搜索";
		d = document.getElementById("description");
	    d.innerHTML = desc;
	}
	orderlink = document.getElementById("hufu");
	orderlink.onmouseover=hover;
	orderlink.onmouseout=cleardesc;
	emaillink = document.getElementById("caizhuan");
	emaillink.onmouseover=hover;
	emaillink.onmouseout=cleardesc;
	complainlink = document.getElementById("xiangfen");
	complainlink.onmouseover=hover;
	complainlink.onmouseout=cleardesc;
	complainlink = document.getElementById("nanshihf");
	complainlink.onmouseover=hover;
	complainlink.onmouseout=cleardesc;
	complainlink = document.getElementById("remenss");
	complainlink.onmouseover=hover;
	complainlink.onmouseout=cleardesc;	


	var but = document.getElementById('but');		
	var username = document.getElementById("username");

	var userkey = document.getElementById("userkey");
	var useremail = document.getElementById("useremail");
	var userphone = document.getElementById("userphone");
	but.onclick = function display() {
	    DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
	    message = "<ul><li><b>用户姓名:</b>" + username.value;
	    message += "<li><b>电话：</b>" + userphone.value + "</ul>";
	    DispWin.document.write(message);
	}
}
