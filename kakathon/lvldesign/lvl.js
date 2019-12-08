window.onload = function() {
  var ls = localStorage,
  current = ls.getItem('current');
  var line, block;
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
      let bl_ver = current + '('+p+';'+i+')';
      if(ls.getItem(bl_ver)=='1'){
        $('#b_'+p+'_'+i).addClass('wall');
      }
      else if(ls.getItem(bl_ver)=='2'){
        $('#b_'+p+'_'+i).addClass('player');
      }
      else if(ls.getItem(bl_ver)=='3'){
        $('#b_'+p+'_'+i).addClass('finish');
      }
    }
  }
  function load_blocks(){
    $('.block, .nav').removeClass('scale0');
  }
  setTimeout(load_blocks,0);
  function ref() {
    document.location.href = 'lvl.html';
  }
  $('.block').click(function() {
    var x,y,str,id;
    str = this.getAttribute('id').split('_');
    console.log(str);
    x = str[1];
    y = str[2];
    var bl_get = current + '('+x+';'+y+')';
    console.log(current);
    id = '#b_'+x+'_'+y;
    console.log(id);
    console.log(x+'\n'+y);
    $('.choose').removeClass('scale0');
    $('.block').addClass('scale0');
    $('#none').click(function() {
      if(ls.getItem(bl_get)){
        ls.removeItem(bl_get);
        $(id).removeClass('wall finish player');
      }
    });
    $('#wall').click(function() {
      ls.setItem(bl_get,'1');
      $(id).removeClass('finish player');
      $(id).addClass('wall');
    });
    $('#finish').click(function() {
      nf = ls.getItem(current+'finish')
      ls.setItem(bl_get,'3');
      $('.finish').removeClass('finish');
      $(id).removeClass('wall player');
      $(id).addClass('finish');
      ls.setItem(current+'finish',bl_get)
    });
    $('#player').click(function() {
      np = ls.getItem(current+'player')
      ls.setItem(bl_get,'2');
      ls.removeItem(np);
      $('.player').removeClass('player');
      $(id).removeClass('wall finish');
      $(id).addClass(current+'player');
      ls.setItem(current+'player',bl_get)
    });
    $('.choose > div').click(function() {
      $('.choose').addClass('scale0');
      setTimeout(ref,50);
    });
  });
$('.del_all').click(function() {
  for(let y=1;y<=10;y++){
    for(let x=1;x<=10;x++){
      var id1 = '#b_'+x+'_'+y;
      ls.removeItem(current + '('+x+';'+y+')');
      $(id1).removeClass('wall finish player');
    }
  }
  ls.removeItem(current+'player');
  ls.removeItem(current+'finish');
  link('lvl.html');
});
}
function link(l) {
  document.location.href = l;
}
