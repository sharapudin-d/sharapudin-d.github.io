var current = localStorage.getItem('current');
window.onload = function() {
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
