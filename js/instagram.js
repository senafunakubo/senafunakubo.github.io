var hash = window.location.hash;
var token = hash.substr(14);
if (hash.substr(0,14) == '#access_token=') {
  $.ajax({
    url: 'https://api.instagram.com/v1/users/self/?access_token='+ token,
    type: 'GET',
    dataType: 'jsonp',
    success: function(ist){
        $("#myInfoName").html(ist.data["full_name"]);
        $("#myInfoPhoto").append("<img src=" + ist.data.profile_picture + ">");
        $("#login").hide();
        $("#userName").show();
        $("#logout").show();

        }

  });

}else{
  console.log("failed");
}


function whoFollower(token){
  $("#follow").click(showFollowers(token));
}

function showFollowers(token){
  $.ajax({
   url: 'https://api.instagram.com/v1/users/self/follows?access_token=' + token,
   dataType: 'jsonp',
   type: 'GET',
     success: function(data){
      $("#userInfo").html(data);
      for(let follower of data.data) {
      $("#userInfo").append("<img src=" + follower.profile_picture + "><p>"+follower.full_name+"</p>");
      }

     }
  });
}
