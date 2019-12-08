window.onload = function() {
  if(!(localStorage.getItem('current'))){
    for(let i=0;i<+localStorage.getItem('loads');i++){
      if(localStorage.getItem('l'+i)){
        localStorage.setItem('current','l'+i);
        $('.llink[key="l'+i+'"]').addClass('curr_link');
        break;
      }
    }
  }
  function anime() {
    $('.scale0').removeClass('scale0');
  }
  setTimeout(anime, 50);
  if(localStorage.getItem("loads")){
    var loads = +localStorage.getItem("loads");
    for(i=0;i<=loads;i++){
      if(localStorage.getItem('l'+i)){
        item = localStorage.getItem('l'+i);
        $('.levels').append('<div class="llink" key="l'+i+'"><h2>'+item+'</h2><div class="lbutts"><button type="button" class="current_button l_button" onclick="curr('+i+')"><i class="fas fa-check"></i></button><button type="button" class="del_button l_button" onclick="del('+i+')"><i class="fas fa-trash-alt"></i></button></div></div>');
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
  $('.levels').addClass('scale0');
}
function hideInput() {
  $('.confirm').removeClass('cin');
  $('.levels').removeClass('scale0');
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
  for(let y=1;y<=10;y++){
    for(let x=1;x<=10;x++){
      let item ='l'+rm+'('+x+';'+y+')';
      if(localStorage.getItem(item)){
        localStorage.removeItem(item);
      }
    }
  }
  if(localStorage.getItem('current')=='l'+rm){
    localStorage.removeItem('current')
  }
  localStorage.removeItem('l'+rm);
  ref();
}
function ref() {
  document.location.href = 'level.html';
}
function link(l) {
  document.location.href = l;
}
