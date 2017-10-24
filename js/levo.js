$(function() {
    var triggerNode = $(".learnmore");

    $(window).scroll(function(){
        var triggerNodePosition = $(triggerNode).offset().top - $(window).height();
        if ($(window).scrollTop() > triggerNodePosition) {
            $('h2').css('color','#B48B5B');
        }
    });

  });
