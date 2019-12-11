var alg = '', current = localStorage.getItem('current');
window.onload = function() {
function anime() {
  $('.scale0').removeClass('scale0');
  $('.restart_button').addClass('scale0');
  $('.victory').addClass('scale0');
}
setTimeout(anime, 50);
var ls = localStorage;
for(let i=1;i<=10;i++){
  line = '<div class="line l'+i+'" lnum="'+i+'"></div>';
  $('.level').append(line);
  for(let p=1;p<=10;p++){
    block = '<div class="block scale0" id="b_'+p+'_'+i+'"></div>';
    $('.l'+i).append(block);
  }
}
for(let i=1;i<=10;i++){
  for(let p=1;p<=10;p++){
    let bl_get = ls.getItem(current + '('+p+';'+i+')');
    if(bl_get=='1'){
      $('#b_'+p+'_'+i).addClass('wall');
    }
    else if(bl_get=='2'){
      $('#b_'+p+'_'+i).addClass('player');
    }
    else if(bl_get=='3'){
      $('#b_'+p+'_'+i).addClass('finish');
    }
  }
}
}
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
  var str = $('.player').attr('id').split('_'),
  x = +str[1],
  y = +str[2];
  $('.player').removeClass('player');
  switch (dir) {
    case 'u':
      if(y-1>=1){
        var id = '#b_'+x+'_'+(y-1);
        var id_ver = find_block($(id).attr('class'),'wall');
        if(id_ver == 1){
          id = '#b_'+x+'_'+y;
        }
      }
      else{
        var id = '#b_'+x+'_'+y;
      }
      $(id).addClass('player');
      break;
    case 'd':
      if(y+1<=10){
        var id = '#b_'+x+'_'+(y+1);
        var id_ver = find_block($(id).attr('class'),'wall');
        if(id_ver == 1){
          id = '#b_'+x+'_'+y;
        }
      }
      else{
        var id = '#b_'+x+'_'+y;
      }
      $(id).addClass('player');
      break;
    case 'l':
      if(x-1>=1){
        var id = '#b_'+(x-1)+'_'+y;
        var id_ver = find_block($(id).attr('class'),'wall');
        if(id_ver == 1){
          id = '#b_'+x+'_'+y;
        }
      }
      else{
        var id = '#b_'+x+'_'+y;
      }
      $(id).addClass('player');
      break;
    case 'r':
      if(x+1<=10){
        var id = '#b_'+(x+1)+'_'+y;
        var id_ver = find_block($(id).attr('class'),'wall');
        if(id_ver == 1){
          id = '#b_'+x+'_'+y;
        }
      }
      else{
        var id = '#b_'+x+'_'+y;
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
function is_wall(dir) {
  var str = $('.player').attr('id').split('_'),
  x = +str[1],
  y = +str[2];
  switch (dir) {
    case 'up':
      var id = '#b_'+x+'_'+(y-1),
      data = $(id).attr('class'),
      id_ver = find_block(data,'wall');
      if (id_ver == 1) {
        return true
      }
      else {
        return false
      }
      break;
    case 'down':
      var id = '#b_'+x+'_'+(y+1),
      data = $(id).attr('class'),
      id_ver = find_block(data,'wall');
      if (id_ver == 1) {
        return true
      }
      else {
        return false
      }
      break;
    case 'right':
      var id = '#b_'+(x+1)+'_'+y,
      data = $(id).attr('class'),
      id_ver = find_block(data,'wall');
      if (id_ver == 1) {
        return true
      }
      else {
        return false
      }
      break;
    case 'left':
      var id = '#b_'+(x-1)+'_'+y,
      data = $(id).attr('class'),
      id_ver = find_block(data,'wall');
      if (id_ver == 1) {
        return true
      }
      else {
        return false
      }
      break;
    default:
      alert('Wrong direction argument of function is_wall()');
  }
}
function Up(p=1){
  for(i=0;i<p;i++){
    alg+='u_';
  }
}
function Down(p=1){
  for(i=0;i<p;i++){
    alg+='d_';
  }
}
function Left(p=1) {
  for(i=0;i<p;i++){
    alg+='l_';
  }
}
function Right(p=1) {
  for(i=0;i<p;i++){
    alg+='r_';
  }
}
function end(){
  alg = alg.split('_');
  for(let i=0;i<alg.length-1;i++){
      setTimeout(img_move,i*400,alg[i]);
  }
  var timer = alg.length*400;
  $('.timer').append(timer + ' ms');
}
function link(l) {
  document.location.href = l;
}
$('.play_button').click(function() {
  var ex,code,start,end,codeid;
  codeid = current + 'donut_code'
  if(localStorage.getItem(codeid)){
    console.log(localStorage.getItem(codeid));
    code = localStorage.getItem(codeid);
  }
  else{
    code = '';
  }
  ex = document.getElementById('exec');
  start = 'function Main(){\n const st = new Date().getTime();\n'
    end = '\n end();} \n setTimeout(Main, 500);';
  ex.innerHTML = start + code + end;
  $('.play_button').addClass('scale0');
  $('.restart_button').removeClass('scale0');
});
$('.restart_button').click(function() {
  document.location.href = 'play.html';
});
