window.onload = function() {
  if(localStorage.getItem('donut_code')){
    code.value = localStorage.getItem('donut_code');
  }
}
function save(){
  localStorage.setItem('donut_code', code.value);
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
  // не кнопка tab - выходим
  if( event.keyCode !== 9 )
    return;
  event.preventDefault();
  // Opera, FireFox, Chrome
  var textarea = $(this)[0],
    selStart = textarea.selectionStart,
    selEnd   = textarea.selectionEnd,
    slection = textarea.value.substring( selStart, selEnd ),
    slection_new = '',
    before   = textarea.value.substring( 0, selStart ),
    after    = textarea.value.substring( selEnd, textarea.value.length );
  // добавляем tab
  if( ! event.shiftKey ){
    selStart++;
    if( slection.trim() )
      slection_new = slection.replace(/^/gm, function(){ selEnd++; return "\t"; });
    else {
      slection_new = "\t";
      selEnd++;
    }
  }
  // убираем табы
  else {
    // если символ до выделения тоже \t удаляем и его
    if( before[ before.length -1 ] === "\t" ){
      before = before.substring( 0, before.length - 1 );
      selStart--;
      selEnd--;
    }
    slection_new = slection.replace(/^\t/gm, function(){ selEnd--; return ""; });
  }
  textarea.value = before + slection_new + after;
  // курсор
  textarea.setSelectionRange( selStart, selEnd );
});
