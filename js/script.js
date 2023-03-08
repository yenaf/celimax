$(function(){
    mainInit();
    //링크막아주기 넣기
    $(document).on('click','a[href="#"]',function(e){ e.preventDefault() }) 
 })
 
 function mainInit(){
   gnb_menu();
   best();
   top_btn()
   
 }
 
function gnb_menu(){
  let $nav=$('#nav');
  let $gnbli=$('#nav .gnb>li');
  let $subul=$('#nav .gnb li .sub');
  let $close=$('#nav .close');
  let $all_manu=$('#header .all-menu');

  $('#nav .bg').hide()
  $gnbli.hover(function(){
    $subul.hide();
    $(this).find('ul').show().animate({opacity:1});
    $('#nav .bg').show();
  })
  $nav.on('mouseleave',function(){
    $subul.hide();
    $('#nav .bg').hide();
  })
  $all_manu.on('click',function(){
    $nav.addClass('on');
  })
  $close.on('click',function(){
    $nav.removeClass('on');
  })
}

function best(){
  let $li=$('.main .bestSeller ul li');
  let $li0=$('.main .bestSeller ul li:eq(0) a img');
  let $li1=$('.main .bestSeller ul li:eq(1) a img');
  let $li2=$('.main .bestSeller ul li:eq(2) a img');

  $li.eq(0).hover(function(){
    $li0.attr('src','images/bestseller1-1.png');
  })
  $li.eq(1).hover(function(){
    $li1.attr('src','images/bestseller2-1.png');
  })
  $li.eq(2).hover(function(){
    $li2.attr('src','images/bestseller3-1.png');
  })

  $li.on('mouseleave',function(){
    $li0.attr('src','images/bestseller1.png');
    $li1.attr('src','images/bestseller2.png');
    $li2.attr('src','images/bestseller3.png');
  }) 
}

function top_btn(){
  let navOffset=$('#nav').offset().top;
  let top=0;

  $(window).on('scroll',function(){
    top=$(this).scrollTop();
    if(top>navOffset){
      $('.nav').addClass('fixed');
    }else{
      $('.nav').removeClass('fixed');
    }

    if(top>400){
      $('.topbtn').addClass('show');
    }else{
        $('.topbtn').removeClass('show');
    }

  })
}
