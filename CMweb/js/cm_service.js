$(document).ready(function() {

  h = $(window).innerHeight();
  w = $(window).innerWidth();

  if (w>=1025){
    service_img_box_width = w - 380;
    $(".service_description_box_left,.service_description_box_right").
    css("width", service_img_box_width + "px");

  }
  else if (w<=1024 && w>=768){
    service_img_box_width = w - 380;
    $(".service_description_box_left,.service_description_box_right").
    css("width", service_img_box_width + "px");
  }
  else if (w<768) {

    $(".service_pic,.service_description_box_left,.service_description_box_right").
    css("width", w + "px");

    // if (h<=640) {
    // }
    // else if(h>=780){
    //
    // }
    // else {
    //
    // }
  }
});
