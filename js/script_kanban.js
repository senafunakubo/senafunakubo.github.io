$(function(){
  $("#tdTODO").load("http://localhost/postit");
  $("#tdTODO").load("http://localhost/postit?title=sa");

  //$.ajax({
  //url:"http://api.ideiadoluiz.com.br/postit2",
  //  success: function(response){
  //  $("tdTODO").append(response);
  //  },
  //  error: function(err){
  //  alert("error");
  //    }
  //  });
});
