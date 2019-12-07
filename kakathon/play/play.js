window.onload = function() {
var ls = localStorage;
for(let i=1;i<=10;i++){
  line = '<div class="line l'+i+'" lnum="'+i+'"></div>';
  $('.level').append(line);
  for(let p=1;p<=10;p++){
    block = '<div class="block" id="b_'+p+'_'+i+'"></div>';
    $('.l'+i).append(block);
  }
}
for(let i=1;i<=10;i++){
  for(let p=1;p<=10;p++){
    if(ls.getItem('('+p+';'+i+')')=='1'){
      $('#b_'+p+'_'+i).addClass('wall');
    }
    else if(ls.getItem('('+p+';'+i+')')=='2'){
      $('#b_'+p+'_'+i).addClass('player');
    }
    else if(ls.getItem('('+p+';'+i+')')=='3'){
      $('#b_'+p+'_'+i).addClass('finish');
    }
  }
}
}
var alg = '';
function find_block(cl,block) {
  var sp = cl.split(' '),
  res = 0;
  for(k=0;k<sp.length;k++){
    if(sp[k]==block){
      res=1;
    }
  }
  return res
}
function img_move(dir) {
  console.log($('.player').attr('id'));
  console.log('Direction: '+dir);
  var str = $('.player').attr('id').split('_'),
  x = +str[1],
  y = +str[2];
  $('.player').removeClass('player');
  switch (dir) {
    case 'u':
      var id = '#b_'+x+'_'+(y-1);
      var id_ver = find_block($(id).attr('class'),'wall');
      if(y-1<1 || id_ver == 1){
        id = '#b_'+x+'_'+y;
      }
      $(id).addClass('player');
      break;
    case 'd':
      var id = '#b_'+x+'_'+(y+1);
      var id_ver = find_block($(id).attr('class'),'wall');
      if(y+1>10 || id_ver == 1){
        id = '#b_'+x+'_'+y;
      }
      $(id).addClass('player');
      break;
    case 'l':
      var id = '#b_'+(x-1)+'_'+y;
      var id_ver = find_block($(id).attr('class'),'wall');
      if(x-1<1 || id_ver == 1){
        id = '#b_'+x+'_'+y;
      }
      $(id).addClass('player');
      break;
    case 'r':
      var id = '#b_'+(x+1)+'_'+y;
      var id_ver = find_block($(id).attr('class'),'wall');
      if(x+1>10 || id_ver == 1){
        id = '#b_'+x+'_'+y;
      }
      $(id).addClass('player');
      break;
    default:
      console.log('Error');
  }
  if(find_block($(id).attr('class'),'finish')) {
    $('.block').addClass('scale0');
    $('.victory').removeClass('scale0');
  }
}
function Up(){
  alg+='u_'
}
function Down(){
  alg+='d_'
}
function Left() {
  alg+='l_'
}
function Right() {
  alg+='r_'
}
function end(){
  alg = alg.split('_');
  for(let i=0;i<alg.length-1;i++){
      setTimeout(img_move,i*500,alg[i]);
  }
}
$('.play_button').click(function() {
  var ex,code,start,end;
  if(localStorage.getItem('donut_code')){
    console.log(localStorage.getItem('donut_code'));
    code = localStorage.getItem('donut_code');
  }
  else{
    code = '';
  }
  ex = document.getElementById('exec');
  start = 'function Main(){'
    end = '\nend();}setTimeout(Main, 500);';
  ex.innerHTML = start + code + end;
  $('.play_button').addClass('scale0');
  $('.restart_button').removeClass('scale0');
});
$('.restart_button').click(function() {
  document.location.href = 'play.html';
});
