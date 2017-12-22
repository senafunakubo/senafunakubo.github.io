$(function() {
  h = $(window).innerHeight();
  w = $(window).width();

  height = $(".pic_meeting").height();
  $(".solution_box,.solution_wrapper").height(height);

  box_height = h - 77;
  box_width = w - 1024;
  $(".catchphrase-box,.catchphrase-box-child,#top_section,#top_image").
  css("height", box_height + "px");

  $(".arrow_place").offset({
    top: box_height - 350
  });

  if (box_width > 500) {
    $(".catchphrase-box")
      .css("width", (box_width - 350) + "px");

    $(".catchphrase_deco")
      .css("margin-top", 7 + "rem")
      .css("margin-left", 3 + "rem")
      .css("margin-right", 3 + "rem");

  } else {
    $(".catchphrase-box").css("width", box_width + "px");
  }

  $('#your_solution').append(
    '<style type="text/css">.fa-amazon,.fa-globe,.fa-thumbs-o-up {display:none;}'
  );

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
