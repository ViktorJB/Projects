bindEvents();
	
var storedUser;
var days=[];
var dayWeek;

function loadUsers() {

	var usersLoad=JSON.parse(localStorage.getItem('sessionUser'));

	  for (var i = 0; i < usersLoad.length; i++) {
        var entry = usersLoad[i];
        storedUser = entry.username;
        var storedSession = entry.session;
        if (storedSession=="1") {
        	 document.getElementById('name-user-rides-add').innerHTML=storedUser;
            return;
        }        
    }
}

function addRide(){

     var newRide={
        username:storedUser,
        rideName:document.getElementById('input-name-rides').value,
        rideStar:document.getElementById('ride-start').value,
        rideEnd:document.getElementById('ride-end').value,
        rideDescription:document.getElementById('txt-description').value,
        departure:document.getElementById('hour-departure').value,
        arrival:document.getElementById('arrival').value,
        dayWeek,
    };

    var rides= JSON.parse(localStorage.getItem('rides'));
    if(!rides){
        rides=[];
    }
    
    rides.push(newRide);
    localStorage.setItem('rides', JSON.stringify(rides));
}

function getDays(){
   var checkboxes = document.getElementById("days-list").checkbox;
    for (var x=0; x < checkboxes.length; x++) {
     if (checkboxes[x].checked) {
       days.push(checkboxes[x].value);
     }
    }
    dayWeek=days;
}


function bindEvents(){
	document.getElementById('welcome-rides-add').addEventListener("load", loadUsers());

    var saveButton=document.getElementById('btn-save');
    saveButton.addEventListener('click', function(){
        getDays();
        addRide();
    })
}