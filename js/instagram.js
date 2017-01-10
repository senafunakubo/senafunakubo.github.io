var token = '3586492222.9462142.5174a0635898455bae025ce22d526bc9',
    username = 'sena17824';

  $.ajax({
    url: 'https://api.instagram.com/v1/users/self/?access_token='+ token,
    type: 'GET',
    dataType: 'jsonp',
    success: function(ist){
      $('#178mo').on('click', function() {
        $("#myName").html(ist.data["full_name"]);
        $("#loginArea").hide();
        $("#logoutArea").show();
      });
    }

  });

//if else

  $.ajax({
    url: 'https://api.instagram.com/v1/users/self/follows?access_token=' + token,
    dataType: 'jsonp',
    type: 'GET',
    success: function(){
     console.log(data[0][1]);
     document.getElementById('userName') = data[0][1];
     //$("#userName").html(data[0]);

  }
});
