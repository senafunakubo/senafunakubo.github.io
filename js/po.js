$(function(){
  
   $(".PhotoBox").hover(function(){
      $(".SlideBox",this).stop().animate({top:"0px"},"fast");
   },function(){
      $(".SlideBox",this).stop().animate({top:"200px"},"slow");
   });

   $(".PhotoBox").hover(function(){
      $(".SlideBox2",this).stop().animate({top:"0px"},"fast");
   },function(){
      $(".SlideBox2",this).stop().animate({top:"200px"},"slow");
   });

});
