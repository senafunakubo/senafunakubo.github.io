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
        $("#myInfoBio").html(ist.data["bio"] + "<br>" + "<span> Following: </span>" + ist.data.counts["follows"] +" / " + "<span> Followers: </span>" + ist.data.counts["followed_by"]);
        $("#login").hide();
        $("#followButton").show();
        whoFollowers();
        $("#logout").show();
        }
    });
<<<<<<< HEAD


  $.ajax({
    url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token='+ token,
    type: 'GET',
    dataType: 'jsonp',
    success: function(myimg){
      for(var i = 0; i < myimg.data.length; i++){
        $("#myPhoto").append("<a href=" + myimg.data[i].link + "><img src=" + myimg.data[i].images.standard_resolution["url"]+ "></a>");
        console.log( myimg.data[i].caption["text"],myimg.data[i].link);
      }
    }

  });

}else{
   console.log("please login");
 }

=======

>>>>>>> origin/master

function showFollowers(){
  $.ajax({
<<<<<<< HEAD
=======
    url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token='+ token,
    type: 'GET',
    dataType: 'jsonp',
    success: function(myimg){
      for(var i = 0; i < myimg.data.length; i++){
        $("#myPhoto").append("<img src=" + myimg.data[i].images.standard_resolution["url"]+ ">");
        // $("#myPhoto").append("<span class=captions>" + myimg.data[i].caption["text"] + "</p>");
      }

    }
  });

 }else{
   console.log("please login");
 }


function showFollowers(){
  $.ajax({
>>>>>>> origin/master
   url: 'https://api.instagram.com/v1/users/self/follows?access_token=' + token,
   dataType: 'jsonp',
   type: 'GET',
     success: function(data){
      $("#userName").show();
      $("#userInfo").html(data);
      for(let follower of data.data) {
      $(".userInfo").append("<img src=" + follower.profile_picture + " align='top'>" + "<span>"+ follower.full_name +"</span>");
      $("#followButton").hide();
      }

     }
  });
}

<<<<<<< HEAD
=======
// function myCaption(){
//   $("#myPhoto").append("<span>"+myimg.data[i].images.caption+"</span>")
// }

>>>>>>> origin/master
function whoFollowers(){
 $("#follow").click(showFollowers);
}
