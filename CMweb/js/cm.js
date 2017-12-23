$(function() {
  h = $(window).innerHeight();
  w = $(window).innerWidth();

  topImgWidth = w - 342;
  $("#top_image").css("width", topImgWidth + "px");

  box_height = h - 77;

  $(".catchphrase-box,.catchphrase-box-child,#top_section,#top_image").
  css("height", box_height + "px");


// 3 points
  $('#your_solution').append(
    '<style type="text/css">.fa-amazon,.fa-globe,.fa-thumbs-o-up {display:none;}'
  );

// solution
  height = $(".pic_meeting").height();
  $(".solution_box,.solution_wrapper").height(height);

});


$(function() {
  var triggerNode = $(".points-text");

  $(window).scroll(function() {
    var triggerNodePosition = $(triggerNode).offset().top - $(window).height();
    if ($(window).scrollTop() > triggerNodePosition) {
      $('.fa-amazon, .fa-globe, .fa-thumbs-o-up').delay(500).fadeIn(1000);
    }
  });

});


$(function() {
  $('.content').hover(function() {
    $('.caption', this).animate({
      top: "5%"
    }, 300);
  }, function() {
    $('.caption', this).animate({
      top: "10%"
    }, 300);
  });
});


$(function() {
  setTimeout('arrowMove()');
});

function arrowMove() {
  $('.arrow').animate({
    marginTop: '-=10px'
  }, 900).animate({
    marginTop: '+=10px'
  }, 900);
  setTimeout('arrowMove()', 1600);
}


$(function() {
  var triggerNode = $("#contact");

  $(window).scroll(function() {
    var triggerNodePosition = $(triggerNode).offset().top - $(window).height();
    if ($(window).scrollTop() > triggerNodePosition) {
      chatSubMove();
    }
  });

});


function chatSubMove() {
  $(".chat_sub").each(function() {

    var $this = $(this);
    var str = $this.text();
    $this.empty().show();
    str = str.split("");

    var delay = 100;

    $.each(str, function(i, val) {
      if (val == "^") {} else {
        $this.append('<span>' + val + '</span>');
        $this.children("span").hide().fadeIn(100).delay(delay * i);
      }
    });

    $this.children("span:last").fadeOut(1000);
  });
}
