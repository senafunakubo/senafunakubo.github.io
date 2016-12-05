function FormClicked(){
  var email = document.getElementById("inEmail").value;
  var inPassword = document.getElementById("inPassword").value;

  if(email == "inabacker24@gmail.com" && inPassword == 123456){
    window.alert("The user has logged in");
  } else{
    window.alert("Incorrect user/password.");
  }
}
