// portfolio.js

(function($){

  // $('body').on('mouseover',function(){
    // $('body').css({'cursor':'none'});
  // });

  // $(document).on('mousemove',function(e){
  //   console.log(e.originalEvent);
  //   var mx = e.originalEvent.clientX + 3;
  //   var my = e.originalEvent.clientY + 3;
  //   $('.cursor').css({
  //     'left': mx,
  //     'top': my,
  //     'width':'10px',
  //     'height':'10px',
  //     'position':'fixed',
  //     'borderRadius':'100%',
  //     'zIndex':2000,
  //     'backgroundColor':'#f00',
  //     'boxShadow':'2px 2px 2px #333',
  //     transition:'all 100ms ease'
  //   });
  // });

  var scroll=$('.scroll');
  scroll.children('a').on('click',function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:950},500)
  });


  var scrollBtn =$('.scrollbtn');

  $(window).on('scroll',function(e){
    e.preventDefault();
    var thisTop = $(this).scrollTop();
    if(thisTop<500){
      scrollBtn.stop().fadeOut();
    }else{
      scrollBtn.stop().fadeIn();
    }    
  });


  scrollBtn.on('click',function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:0},500);
  });



  var gnb=$('.gnb');
  var gnbLi = gnb.children('li');
  var myani = [950, 1750, 2650, 4650,6250,7150, 8050];
  /*var timed = 500;
  var GnbClick = function(index) {
    $(this).eq(index).on('click',function(e){
      e.preventDefault();
      $('html, body').animate({scrollTop:myani[index]}, timed);
    });  
  };*/


/*  $.each(gnbLi,function(i,v){
    GnbClick(i);
  });*/
  
/* for(var i=0; i<5; i++){
    gnbLi.eq(i).on('click',function(e){
      e.preventDefault();
      $('html, body').animate({scrollTop:myani[i]}, 500);
    });  
  }*/

  
  gnbLi.eq(0).on('click',function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:myani[0]}, 500);
  });

  gnbLi.eq(1).on('click',function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:myani[1]}, 500);
  });

  gnbLi.eq(2).on('click',function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:myani[2]}, 500);
  });

  gnbLi.eq(3).on('click',function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:myani[3]}, 500);
  });

  gnbLi.eq(4).on('click',function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:myani[4]}, 500);
  });

  gnbLi.eq(5).on('click',function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:myani[5]}, 500);
  });

  gnbLi.eq(6).on('click',function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:myani[6]}, 500);
  });


  var winW=$(window).outerWidth();
  var gnbBtn=$('.gnb_btn');
  var gnb=$('.gnb');

  if(winW<1200){
    gnbBtn.on('click',function(e){
      e.preventDefault();
      gnb.stop().fadeToggle();
      gnb.css({'backgroundColor':'#000'});
      gnb.find('a').css({'color':'#fff'});
      $(this).children('button').toggleClass('active');
    });
  }else if(winW<1920){
    gnbBtn.on('click',function(e){
      gnb.stop().slideToggle();
      $(this).children('button').toggleClass('active');
    });
  }

  var aboutBox=$('.aboutBox');
  var pic =$('.pic');
  var aboutText=$('.aboutText');
  var aboutoff =pic.offset().top;
  var winH=$(window).outerHeight(true);
  var H=winH/4*5;

  $(window).on('scroll',function(){
    var nowTop = $(window).scrollTop();
    if(nowTop>=aboutoff-H){
      pic.addClass('show');
      aboutText.addClass('show');
    } else{
      pic.removeClass('show');
      aboutText.removeClass('show');
    }
  });

  var specialty=$('.specialty');
  var specialtyLi = specialty.children('li');
  var specialtyoff = specialty.offset().top;
  var winH = $(window).outerHeight(true);
  var H = winH/2
  
  $(window).on('scroll',function(){
    var nowTop=$(window).scrollTop();
    if(nowTop>=specialtyoff-H){
      specialtyLi.addClass('tada')
    } else{
      specialtyLi.removeClass('tada')
    }
  });

  var port = $('.port');
  var portLi = port.children('li');
  var portText = $('.portText');
  var portTextUl = portText.children('ul');
  var portoff = $('.portBox').offset().top;
  var winH =$(window).outerHeight(true);
  var H=winH/2;


  $(window).on('scroll',function(){
    var nowTop =$(window).scrollTop();
    if(nowTop>=portoff-H){
      $('.portBox').addClass('show')
    }else{
      $('.portBox').removeClass('show')
    }
  });

  portTextUl.eq(0).addClass('active');
  portLi.eq(0).siblings().css({'borderTop':'3px solid #274'})
  portLi.eq(0).siblings().children('a').css({'color':'#333'})

  portLi.on('click',function(e){
    e.preventDefault();
    var i = $(this).index();
    portLi.eq(i).addClass('active');
    portLi.eq(i).siblings().removeClass('active');
    portLi.eq(i).siblings().css({
    'borderTop':'3px solid #274',});
    portLi.eq(i).children('a').css({
    'color':'#fff'
    })
    portLi.eq(i).siblings().children('a').css({
    'color':'#333'
    })

    portTextUl.eq(i).addClass('active');
    portTextUl.eq(i).siblings().removeClass('active');
  });

  var careerBox=$('.careerBox');
  var career= $('.career');
  var careerUl = $('.careerText');
  var careeroff =careerUl.offset().top;
  var winH = $(window).outerHeight(true);

  var H = winH/2;

  $(window).on('scroll',function(){
    var nowTop = $(window).scrollTop();

    if(nowTop>=careeroff-H){
    career.addClass('active');
    }else{
    career.removeClass('active')
  };
  });


  var careerText = $('.careerText');
  var careerLi=careerText.children('li');
  var careerLiOdd =careerText.children('li:nth-of-type(odd)');
  var careerLieven =careerText.children('li:nth-of-type(even)');
  var liLen = careerLi.length;
  var careerLioff=careerLi.offset().top;
  var topSet = [];
  for(var j=0; j< liLen; j++){
    topSet[j] = parseInt(careerLi.eq(j).offset().top);
  }

  var ScrollView = function() {
  var nowTop = $(window).scrollTop();
  var winH = $(window).outerHeight(true);
  var H = winH/2;
  for(var i = 0; i < liLen; i++) {

      if(nowTop >= topSet[i]-H){
        careerLiOdd.eq(i).addClass('show');
        careerLieven.eq(i).addClass('show');
       }
       else{careerLiOdd.eq(i).removeClass('show');
       careerLieven.eq(i).removeClass('show');}
    }
  };
  ScrollView();

  $(window).on('scroll',function(){
    ScrollView();
  });


  var indicator=$('.indicator');
  var indiLi =indicator.children('li');
  var testimonialWrap= $('.testimonialWrap');

  indiLi.eq(0).children('a').addClass('active');
  indiLi.on('click',function(e){
    e.preventDefault();
    var i=$(this).index();
    testimonialWrap.animate({left:i*-100+'%'});
    indiLi.eq(i).children('a').addClass('active');
    indiLi.eq(i).siblings().children('a').removeClass('active')
  });

  var j=0;  

  setInterval(function(){ 
    if(j>=2){j=0}else{j+=1}
    testimonialWrap.animate({left:j*-100+'%'});
    indiLi.eq(j).children('a').addClass('active');
    indiLi.eq(j).siblings().children('a').removeClass('active');
  },3000);

  var contact = $('.contact');
  var contactLi =contact.find('li');
  var contactOff = contact.offset().top;
  var winH =$(window).outerHeight(true);
  var H=winH/2;

  $(window).on('scroll',function(){
    var nowTop =$(window).scrollTop();
    if(nowTop>=contactOff-H){
      contactLi.addClass('good');
    }else{
      contactLi.removeClass('good');
    }
  });

     
    contactLi.on('mouseenter',function(){
     var i = $(this).index();
     contactLi.find('i').eq(i).addClass('rotate');
   });

    contactLi.on('mouseleave',function(){
     var i = $(this).index();
     contactLi.find('i').eq(i).removeClass('rotate');
   });



  var skillBox =$('.skillBox');
  var skill1=$('.skill');
  var skill1Li=skill1.children('li');
  var skill2=$('.skill2');
  var skill2Li=skill2.children('li');
  var skilloff =skillBox.offset().top;
  var winH = $(window).outerHeight(true);
  var H = winH/2;

  $(window).on('scroll',function(){
    var nowTop = $(window).scrollTop();
    if(nowTop>=skilloff-H){
    skill1Li.find('path').addClass('circle');
    skill2Li.find('path').addClass('circle');}
    else{
    skill1Li.find('path').removeClass('circle');
    skill2Li.find('path').removeClass('circle');}
  }); 

})(jQuery);




