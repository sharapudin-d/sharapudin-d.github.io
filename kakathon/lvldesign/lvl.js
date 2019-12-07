window.onload = function() {
  var ls = localStorage;
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
  function load_blocks(){
    $('.block').removeClass('scale0');
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
    id = '#b_'+x+'_'+y;
    console.log(id);
    console.log(x+'\n'+y);
    $('.choose').removeClass('scale0');
    $('.block').addClass('scale0');
    $('#none').click(function() {
      if(ls.getItem('('+x+';'+y+')')){
        ls.removeItem('('+x+';'+y+')');
        $(id).removeClass('wall finish player');
      }
    });
    $('#wall').click(function() {
      ls.setItem('('+x+';'+y+')','1');
      $(id).removeClass('finish player');
      $(id).addClass('wall');
    });
    $('#finish').click(function() {
      nf = ls.getItem('finish')
      ls.setItem('('+x+';'+y+')','3');
      $('.finish').removeClass('finish');
      $(id).removeClass('wall player');
      $(id).addClass('finish');
      ls.setItem('finish','('+x+';'+y+')')
    });
    $('#player').click(function() {
      np = ls.getItem('player')
      ls.setItem('('+x+';'+y+')','2');
      ls.removeItem(np);
      $('.player').removeClass('player');
      $(id).removeClass('wall finish');
      $(id).addClass('player');
      ls.setItem('player','('+x+';'+y+')')
    });
    $('.choose > div').click(function() {
      $('.choose').addClass('scale0');
      setTimeout(ref,50);
    });
  });
}
