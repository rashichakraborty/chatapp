
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCYfExUueJe2nu7KnPeCXWb12DYoWXoyKw",
      authDomain: "chatweb-app.firebaseapp.com",
      databaseURL: "https://chatweb-app-default-rtdb.firebaseio.com",
      projectId: "chatweb-app",
      storageBucket: "chatweb-app.appspot.com",
      messagingSenderId: "277250845972",
      appId: "1:277250845972:web:cf96bca130140528102601"
    };
    
    // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
	room_name = document.getElementById("room_name").value;

	firebase.database().ref("/").child(room_name).update({
		purpose: "adding room name"
	});

	localStorage.setItem("room_name", room_name);

	window.location = "chatapp_page.html";
}

function getData() {
	firebase
		.database()
		.ref("/")
		.on("value", function (snapshot) {
			document.getElementById("output").innerHTML = "";
			snapshot.forEach(function (childSnapshot) {
				childKey = childSnapshot.key;
				Room_names = childKey;
				console.log("Room Name - " + Room_names);
				row =
					"<div class='room_name' id=" +
					Room_names +
					"  onclick='redirectToRoomName(this.id)' >#" +
					Room_names +
					"</div><hr>";
				document.getElementById("output").innerHTML += row;
			});
		});
}

getData();

function redirectToRoomName(name) {
	console.log(name);
	localStorage.setItem("room_name", name);
	window.location = "kwitter_page.html";
}

function logout() {
	localStorage.removeItem("user_name");
	localStorage.removeItem("room_name");
	window.location = "kwitter.html";
}
