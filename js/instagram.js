 var hash = window.location.hash;
 var token = hash.substr(14);
 if (hash.substr(0,14) == '#access_token=') {
  $.ajax({
    url: 'https://api.instagram.com/v1/users/self/?access_token='+ token,
    type: 'GET',
    dataType: 'jsonp',
    success: function(ist){
        $("#myInfoName").html(ist.data["full_name"]);
        $(".myInfoPhoto").append("<img src=" + ist.data.profile_picture + ">");
        $("#myInfoBio").html(ist.data["bio"]);
         console.log(ist.data);
        $("#login").hide();
        $("#followButton").show();
        whoFollowers();
        $("#logout").show();
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
      $(".userInfo").append("<img src=" + follower.profile_picture + " align='top'>" + "<span>"+follower.full_name+"</span>");
      $("#followButton").hide();
      }

     }
  });
}


function whoFollowers(){
 $("#follow").click(showFollowers);
}
