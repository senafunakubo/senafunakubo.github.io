$(function() {

  h = $(window).innerHeight();
  w = $(window).innerWidth();

  headerHeight = $("#header").innerHeight();
  navWrapHeight = $(".nav-wrap-mobile").height();
  box_height = h - headerHeight;


  //MAIN CATCH ANIMATION
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

  // your solution - height of solution
    solution_height = $(".pic_meeting").height();
    solution_height = solution_height + 50;
    $(".solution_box,.solution_wrapper").height(solution_height);

  if (w>=1025){
    $(".catchphrase-box,.catchphrase-box-child,#top_section,#top_image").
    css("height", box_height + "px");

    topImgWidth = w - 342;
    $("#top_image").css("width", topImgWidth + "px");

    // arrow first place
    $(".arrow_place").
    css("top", box_height - 80 + "px");

    service_img_box_width = w - 380;
    $(".service_description_box_left,.service_description_box_right").
    css("width", service_img_box_width + "px");

  }
  else if (w<=1024 && w>=768){
    $(".catchphrase-box,.catchphrase-box-child,#top_section,#top_image").
    css("height", 600 + "px");

    // arrow first place
    $(".arrow_place").
    css("top", 550 + "px");

  }
  else if (w<768) {
    height = $(".pic_meeting").height();
    $(".solution_box").height(height);

    allOfSolutionHeight = height * 2;
    $("#your_solution").height(allOfSolutionHeight);

    box_height_mb = h - (headerHeight + 22); //22 is nav
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
    '<style type="text/css">.fa-amazon,.fa-globe,.fa-cogs {display:none;}'
  );

});


// 3 points - fadein
$(function() {
  var triggerNode = $(".points-text");

  $(window).scroll(function() {
    var triggerNodePosition = $(triggerNode).offset().top - $(window).height();
    if ($(window).scrollTop() > triggerNodePosition) {
      $('.fa-amazon, .fa-globe, .fa-cogs').delay(500).fadeIn(1000);
    }
  });

});

// what we do - animation of captions
$(function() {
  $('.content').hover(function() {
    $('.caption', this).animate({
      top: "15%"
    }, 200);
  }, function() {
    $('.caption', this).animate({
      top: "0%"
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

var timer = false;
$(window).resize(function() {
    if(timer !== false){
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
      windowWidth = $(window).innerWidth();
      if (windowWidth<768) {
        $("#contact").css("margin-top", 380 + "px");
      }
   }, 200);
});
