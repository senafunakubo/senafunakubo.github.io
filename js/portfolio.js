// (function($){
// $(function(){
//
//   $('.button').click(function () {
//     if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
//         $('html, body').css({
//           overflow: 'hidden',
//           height: '100%'
//         });
//     }
//   });
//
//   var position = $(".skills").offset().top;
//
//     $(document)
//         .on('click', '.popup_btn', function(){
//             var $popup = $($(this).attr('href'));
//
//             $('.popup').hide();
//             $popup.css({}).show();
//             $('#overlay').show();
//
//             if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
//               $('html, body, #popup1').css({
//                 height: 'auto'
//               });
//             }
//
//             return false;
//         })
//         .on('click', '.close_btn, #overlay', function(){
//             $('.popup, #overlay').hide();
//             if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
//                 $('html, body').css({
//                   overflow: 'auto',
//                   height: 'auto'
//                 });
//             }
//
//             $(window).scrollTop(position);
//
//             return false;
//         });
//
// });
//
//
// })(jQuery);
