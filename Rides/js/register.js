bindEvents();


function saveToLocalStorage(){
	var user={
		firstname:document.getElementById('first-name').value, 
		lastname:document.getElementById('last-name').value, 
		phone:document.getElementById('phone-number').value,
		username:document.getElementById('user-name').value,
		password:document.getElementById('password').value,
		passwordConfirmed:document.getElementById('confirm').value,		
	};

	var users= JSON.parse(localStorage.getItem('users'));
	if(!users){
		users=[];
	}
	users.push(user);
	localStorage.setItem('users', JSON.stringify(users));
}


function bindEvents(){
	var saveButton=document.getElementById('btn-register');
	saveButton.addEventListener('click', function(){
		saveToLocalStorage();
	})

}