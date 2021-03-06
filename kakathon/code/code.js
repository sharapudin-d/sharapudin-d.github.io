var current = localStorage.getItem('current');
window.onload = function() {
  function anime() {
    $('.scale0').removeClass('scale0');
    $('.info, .times_button').addClass('scale0');
  }
  setTimeout(anime, 50);
  var current = localStorage.getItem('current');
  if(localStorage.getItem(current + 'donut_code')){
    code.value = localStorage.getItem(current + 'donut_code');
  }
}
function save(){
  localStorage.setItem(current + 'donut_code', code.value);
  showSave();
}
function showSave() {
  $('.saver').addClass('saved');
  setTimeout(hideSave, 2000);
}
function hideSave() {
  $('.saver').removeClass('saved');
}
function link(l) {
  document.location.href = l;
}
$('.info_button').click(function() {
  $('.info_button').addClass('scale0');
  $('.times_button').removeClass('scale0');
  $('.main_content').addClass('scale0');
  $('.info').removeClass('scale0');
});
$('.times_button').click(function() {
  $('.info_button').removeClass('scale0');
  $('.times_button').addClass('scale0');
  $('.main_content').removeClass('scale0');
  $('.info').addClass('scale0');
});
$("#code").keydown(function(event){
  if( event.keyCode !== 9 )
    return;
  event.preventDefault();
  var textarea = $(this)[0],
    selStart = textarea.selectionStart,
    selEnd   = textarea.selectionEnd,
    slection = textarea.value.substring( selStart, selEnd ),
    slection_new = '',
    before   = textarea.value.substring( 0, selStart ),
    after    = textarea.value.substring( selEnd, textarea.value.length );
  if( ! event.shiftKey ){
    selStart++;
    if( slection.trim() )
      slection_new = slection.replace(/^/gm, function(){ selEnd++; return "\t"; });
    else {
      slection_new = "\t";
      selEnd++;
    }
  }
  else {
    if( before[ before.length -1 ] === "\t" ){
      before = before.substring( 0, before.length - 1 );
      selStart--;
      selEnd--;
    }
    slection_new = slection.replace(/^\t/gm, function(){ selEnd--; return ""; });
  }
  textarea.value = before + slection_new + after;
  textarea.setSelectionRange( selStart, selEnd );
});
