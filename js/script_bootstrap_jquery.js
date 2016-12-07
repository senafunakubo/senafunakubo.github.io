//document.addEventListner("DOMContentLoaded") , function(){
//
//});
//pure java's style
//
//$(document).ready(function(){
//
//});
//green flag on scratch(Jquery's style ver)

//This is the short version of 2nd one for the Jquery.
$(function(){

 $("#btnLogin").click(function(){
   //var email = document.gerElementById("inEmail").value;
   var email = $("#inEmail").val();

   //var password = document.gerElementById("inPassword").value;
  var password = $("#inPassword").val();

//var resultE1= document.gerElementById("iresult");
//idには先頭に＃が必要
  var resultEl = $("#result");
  resultEl.removeClass();

    if (email == "inabacker24@gmail.com" && password == 123456) {
      //resultE1.className = "bg-success"
      //resultE1.innerHTML = "The user has logged in."

    resultEl.addClass("bg-success")
            .html("The user has logged in.");
          }else{
            // resultE1.className ="bg-danger";
            //resultE1.innerHTML ="Incorrect email/password."
            resultEl.addClass("bg-danger")
                    .html("Incorrect email/password.");
      }
  });

});
