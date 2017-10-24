$(function() {
    var triggerNode = $(".service-description");

    $(window).scroll(function(){
        var triggerNodePosition = $(triggerNode).offset().top - $(window).height();
        if ($(window).scrollTop() > triggerNodePosition) {
            $('h2').css('color','#B48B5B');
        }
    });

  });
