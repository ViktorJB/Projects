bindEvents();

function loadUsers() {
	
	debugger;
	var usersLoad=JSON.parse(localStorage.getItem('users'));

	var user={
		username:document.getElementById('user-name').value,
		pass:document.getElementById('password').value,
		session:'1',
	}
	  for (var i = 0; i < usersLoad.length; i++) {
        var entry = usersLoad[i];
        var storedUserName = entry.username;
        var storedPassWord = entry.password;
        if (user.username == storedUserName && user.pass == storedPassWord) {
        	var userLogged=JSON.parse(localStorage.getItem('sessionUser'));
        	if(!userLogged){
				userLogged=[];
			}
			userLogged.push(user);
			localStorage.setItem('sessionUser', JSON.stringify(userLogged));

            window.open("dashboard.html","true");
            return;
        }

    }
}

function bindEvents(){
	
	 var loginButton=document.getElementById('go-to');
	 loginButton.addEventListener('click', function(){
		loadUsers();
	 })

}