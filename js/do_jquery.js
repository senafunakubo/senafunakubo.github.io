$(function(){

$("#div1").click(function(){
   $("#div2").slideToggle();
   //slideToggle = on/off
 });

 $("#div2").click(function(){
  // $(".div2child").toggle();
  $(".div2child").css("color","#ff0000")
                 .animate(
                   {top: "80%", left: "90%"},
                           5000,
                          function(){
                            $(this).css({
                              left: "0px", top: "0px"
                                        });
                                    });

 });

});
