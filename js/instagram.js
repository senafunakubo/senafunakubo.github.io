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
        $("#followButton").show();
        whoFollowers();
        $("#logout").show();
        }
    });

    $.ajax({
      url: 'https://api.instagram.com/v1/locations/{location-id}?access_token='+ token,
      type: 'GET',
      dataType: 'jsonp',
      success: function(lo){
        console.log(lo);
          }
      });

}else{
  console.log("please login");
}


function showFollowers(){
  $.ajax({
   url: 'https://api.instagram.com/v1/users/self/follows?access_token=' + token,
   dataType: 'jsonp',
   type: 'GET',
     success: function(data){
      $("#userName").show();
      $("#userInfo").html(data);
      for(let follower of data.data) {
      $("#userInfo").append("<img src=" + follower.profile_picture + " align='top'>" + "<span>"+follower.full_name+"</span>");
      $("#followButton").hide();
      }

     }
  });
}


function whoFollowers(){
 $("#follow").click(showFollowers);
}
