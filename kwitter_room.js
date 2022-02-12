
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBtvaTpBKDqWtA5tAp0dw-N4DCZhzjwSbA",
      authDomain: "kwitter-a5965.firebaseapp.com",
      databaseURL: "https://kwitter-a5965-default-rtdb.firebaseio.com",
      projectId: "kwitter-a5965",
      storageBucket: "kwitter-a5965.appspot.com",
      messagingSenderId: "702431963847",
      appId: "1:702431963847:web:2a19682cfa0e4db0aaace2",
      measurementId: "G-H2WL63EN3P"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
