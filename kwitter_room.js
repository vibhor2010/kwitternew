var firebaseConfig = 
{ apiKey: "AIzaSyAt-OXBKYh5a-bAECWORtIb9rXPsYior_M",
 authDomain: "test-f3626.firebaseapp.com",
  databaseURL: "https://test-f3626-default-rtdb.firebaseio.com",
   projectId: "test-f3626", storageBucket: "test-f3626.appspot.com",
    messagingSenderId: "532370571004",
     appId: "1:532370571004:web:3526a98c0ed4d388466179" };
 // Initialize Firebase 
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom(){
      room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
        localStorage.setItem("room_name", room_name);
       window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start co
console.log("room name-"+ Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";  

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}