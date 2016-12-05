var left = 0;
// put left at 0

function btnMoveclicked() {
   left = left + 20;
   var div_move = document.getElementById("div-move");
   div_move.style.left = left + "px";
   //In the page, so many elements are. That's why I need to call the specific element.
   //And just represent that I use "px"

  if(left > 500) {
    left= 0;
  }
}

document.addEventListener("DOMContentLoaded" , function() {
  // call btnMoveClicked() every 100 miliseconds
  window.setInterval(btnMoveclicked , 100);
});

var topspan = 0;
// I dont have to use "top" as a name of elements

// I have to use different function's name between html and java.
function myFunction(){
  topspan = topspan + 20;
  var span_title = document.getElementById("span_title");
  span_title.style.top = topspan;

  if (topspan > span_title.parentElement.clientHeight - topspan) {
    topspan= 0;
  }
}
//span_title's parent = div-green / clientheight = the height

document.addEventListener("DOMContentLoaded" , function(){
 window.setInterval(myFunction, 100);
});

// thread-functions
  //window.setTimeout ex) wait for Xsecond and then say something once

  //window.setInterval ex) forever say something for Xsecond
