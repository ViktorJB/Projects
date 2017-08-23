bindEvents();
	

function loadUsers() {
	debugger;
	var usersLoad=JSON.parse(localStorage.getItem('sessionUser'));

	  for (var i = 0; i < usersLoad.length; i++) {
        var entry = usersLoad[i];
        var storedUser = entry.username;
        var storedSession = entry.session;
        if (storedSession=="1") {
        	 document.getElementById("name-user").innerHTML=storedUser;
            return;
        }
        
    }
}

function bindEvents(){
	debugger;
	document.getElementById("welcome-dashboard").addEventListener("load", loadUsers());
}