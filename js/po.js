$(function(){
   $(".PhotoBox").hover(function(){
      $(".SlideBox",this).stop().animate({top:"0px"},"fast");
   },function(){
      $(".SlideBox",this).stop().animate({top:"200px"},"slow");
   });
});
