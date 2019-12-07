window.onload = function() {
  if(localStorage.getItem("loads")){
    var loads = +localStorage.getItem("loads");
    for(i=0;i<=loads;i++){
      if(localStorage.getItem('level'+i)){
        item = localStorage.getItem('level'+i);
        $('.levels').append('<div class="llink"><h3>'+item+'</h3><div class="lbutts"><button type="button" class="current_button l_button" onclick="del('+i+')"><i class="fas fa-play"></i></button><button type="button" class="del_button l_button" onclick="del('+i+')"><i class="fas fa-trash-alt"></i></button></div></div>');
      }
    }
  }
  else{
    localStorage.setItem("loads",0);
    var loads = +localStorage.getItem("loads");
  }
}
function showInput(){
  $('.confirm').addClass('cin');
  $('.levels').addClass('dark');
}
function hideInput() {
  $('.confirm').removeClass('cin');
  $('.levels').removeClass('dark');
}
function add(){
  var loads = +localStorage.getItem("loads");
  var lname = document.getElementById('level_name');
  console.log(loads);
  localStorage.setItem('level' + loads, lname.value);
  ++loads;
  localStorage.setItem('loads', loads);
  hideInput();
  document.location.href = 'level.html';
}
function del(rm) {
  localStorage.removeItem('level'+rm);
  document.location.href = 'level.html';
}
