$(function() {
  h = $(window).innerHeight();
  w = $(window).innerWidth();

  // 64(px) = header's height
  box_height = h - 64;

  $(function() {
    var $allTopCatch = $('.top_catch');
    var $wordList = $('.top_catch').html().split("");
    $('.top_catch').html("");
    $.each($wordList, function(idx, elem) {
        var catchShow = $("<span/>").text(elem).css({ opacity: 0 });
        catchShow.appendTo($allTopCatch);
        catchShow.delay(idx * 30);
        catchShow.animate({ opacity: 1 }, 1000);
    });
});

  if (w>=1025){
    topImgWidth = w - 342;
    $("#top_image").css("width", topImgWidth + "px");

    $(".catchphrase-box,.catchphrase-box-child,#top_section,#top_image").
    css("height", box_height + "px");

    // arrow first place
    $(".arrow_place").
    css("top", box_height - 80 + "px");
  }
  else if (w<=1024 && w>=768){
    $(".catchphrase-box,.catchphrase-box-child,#top_section,#top_image").
    css("height", 600 + "px");

    // arrow first place
    $(".arrow_place").
    css("top", 550 + "px");
  }
  else if (w<768) {
    box_height_mb = h - 60;
    if (h<=640) {
      $(".mobile,.catchphrase-box,.catchphrase-box-child,#top_section").
      css("height", box_height_mb + "px");
    }
    else if(h>=780){
      $(".mobile,.catchphrase-box,.catchphrase-box-child,#top_section").
      css("height", 650 + "px");
    }
    else {
      $(".mobile,.catchphrase-box,.catchphrase-box-child,#top_section").
      css("height", 70 + "%");
    }
  }


// 3 points - make it disappear
  $('#your_solution').append(
    '<style type="text/css">.fa-amazon,.fa-globe,.fa-thumbs-o-up {display:none;}'
  );

// your solution - height of solution
  height = $(".pic_meeting").height();
  height = height + 50;
  $(".solution_box,.solution_wrapper").height(height);

});

// 3 points - fadein
$(function() {
  var triggerNode = $(".points-text");

  $(window).scroll(function() {
    var triggerNodePosition = $(triggerNode).offset().top - $(window).height();
    if ($(window).scrollTop() > triggerNodePosition) {
      $('.fa-amazon, .fa-globe, .fa-thumbs-o-up').delay(500).fadeIn(1000);
    }
  });

});

// what we do - animation of captions
$(function() {
  $('.content').hover(function() {
    $('.caption', this).animate({
      top: "5%"
    }, 300);
  }, function() {
    $('.caption', this).animate({
      top: "15%"
    }, 300);
  });
});

//top section - animation of an arrow
$(function() {
  setTimeout('arrowMove()');
});

function arrowMove() {
  $('.arrow').animate({
    marginTop: '-=20px'
  }, 850).animate({
    marginTop: '+=20px'
  }, 850);
  setTimeout('arrowMove()', 1000);
}


//contact - animation of a sub description
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
