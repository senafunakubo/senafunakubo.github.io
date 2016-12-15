$(function(){
 // define the server url
 var url = "http://api.ideiadoluiz.com.br/chat/code.php";
 // initialize the counter
 var varCounter = 0;
 // asks the user for his/her name.  prompt...generate screen first.
 var varName= prompt("What is your name?");

  //listner
  $("#btnSend").click(function(){
    // if the message is empty, we leave the function. return...dont't do anything
    if ($("#txtMessage").val() == ""){
      return;
    }

  //request the server to save the messege
    var request = $.post(url, {
      type: "send",
      name: varName,
      message: $("#txtMessage").val()
      });

 // if fail,we will alert the user
    request.fail(function(err){
      alert("error");
      });

 // we clean the messege afterwards
    request.always(function(){
      $("#txtMessage").val("");
      });
  });
   //this meaning is when the buttun is clicked

   //forever loap in a thread
   //it will be called every second.
  setInterval(function(){
    var request = $.post(url, {
      type: "get",
      counter: varCounter
      });

      request.fail(function(err){
        console.log("error");
      });

      request.done(function(data){
        //set the counter to the last message counter
        varCounter = data.lastCounter;
        var i = 0;
        // ↑ the amount of messages
        while(i < data.messages.length){
          // build the message with the array  \n means enter
          var message = data.messages[i].user + ":" +
                        data.messages[i].value + "\n";
          // append the message to the chat
          $("#txtChat").append(message);
          // increment the variable "i"
          i = i + 1;
        }

    //put the scroll at the bottom
        $("#txtChat").scrollTop($("#txtChat").scrollHeight);
      });
  }, 1000);
});

//object...data(Jsone)
//string...text
// {} object
// [] array
// lastCounter etc from Jsone(server)
