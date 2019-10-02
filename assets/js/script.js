$(function() {
 $(window).scroll(function() {
 var scr = $(this).scrollTop();
 $(".bg_img").css({
 "transform" : "translate(0%, " + scr/20 + "%)"
 });
 });
});
