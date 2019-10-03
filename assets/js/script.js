$(function() {
  var buttons = ".gallery_img, a, #mapwrapper",
  sections = "section, .bg_img";
  // $(window).scroll(function() {
  //   var scr = $(this).scrollTop();
  //   $(".bg_img").css({"transform" : "translate(0%, -" + scr/60 + "%)"});
  // });
 $('.gallery_img[href^="#"]').click(function(){
   var target = $(this).attr('href');
   $(target).addClass("active_info");
   $(buttons).addClass("scale0");
   $(sections).addClass("opacity0")
   return false;
 });
$(".times").click(function() {
  $(".info").removeClass("active_info");
  $(buttons).removeClass("scale0");
  $(sections).removeClass("opacity0")
  });
});
