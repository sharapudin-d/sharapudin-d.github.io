window.onload = function() {
  if(localStorage.getItem("loads")){
    var loads = +localStorage.getItem("loads");
    for(i=0;i<=loads;i++){
      if(localStorage.getItem('l'+i)){
        item = localStorage.getItem('l'+i);
        $('.levels').append('<div class="llink" key="l'+i+'"><h3>'+item+'</h3><div class="lbutts"><button type="button" class="current_button l_button" onclick="curr('+i+')"><i class="fas fa-play"></i></button><button type="button" class="del_button l_button" onclick="del('+i+')"><i class="fas fa-trash-alt"></i></button></div></div>');
        if('l'+i==localStorage.getItem('current')){
          $('.llink[key="l'+i+'"]').addClass('curr_link');
        }
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
  localStorage.setItem('l' + loads, lname.value);
  ++loads;
  localStorage.setItem('loads', loads);
  hideInput();
  ref();
}
function curr(c) {
  localStorage.setItem('current','l'+c);
  ref();
}
function del(rm) {
  localStorage.removeItem('l'+rm);
  ref();
}
function ref() {
  document.location.href = 'level.html';
}
