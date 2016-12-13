$(function(){
 $.ajax({
   url:"http://api.ideiadoluiz.com.br/gyukaku/public/generalData",
   success: function(response){
        var i = 0;
         while(i < response.locations.length){
          var myLocation = response.locations[i];
          var myHtml = "<tr>" +
          "<td>"+
          myLocation.id +
           "</td>"+
           "<td>" +
             myLocation.location +
           "</td>"+
           "</tr>";

           $("#tableLocationBody").append(myHtml);
            i = i + 1;
      }
  },
  error: function(err){
    alert("error:" +err);
  }
});

$.ajax({
  url:"http://api.ideiadoluiz.com.br/gyukaku/public/generalData",
  success: function(response){
       var i = 0;
        while(i < response.roles.length){
          var myLocation = response.roles[i];
          var myHtml = "<tr>"+
          "<td>"+
          myLocation.id +
          "</td>"+
          "<td>"+
           myLocation.role +
           "</td>"+
           "</tr>";

           $("#tableLocationBody").append(myHtml);
           i = i + 1;
        }
},
 error: function(err){
    alert("error:" +err);
  }
 });
});

//* i= 0~n-1
