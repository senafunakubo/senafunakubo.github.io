$(function(){
  $.ajax({
    url:"http://api.ideiadoluiz.co.br/",
    success: function(response){
      $("tdTODO").append(response);
    },
    error: function(err){
      alert("error");
    }
  });
});
