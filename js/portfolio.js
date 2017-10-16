(function($){
$(function(){

  $('.button').click(function () {
    $('html, body').css({
       overflow: 'hidden',
       height: '100%'
    });
  });

  var position = $(".skills").offset().top;

    $(document)
        .on('click', '.popup_btn', function(){
            var $popup = $($(this).attr('href'));

            $('.popup').hide();
            $popup.css({}).show();
            $('#overlay').show();

            return false;
        })
        .on('click', '.close_btn, #overlay', function(){
            $('.popup, #overlay').hide();
            $('html, body').css({
               overflow: 'auto',
               height: 'auto'
            });
            $(window).scrollTop(position);

            return false;
        });

});


})(jQuery);
