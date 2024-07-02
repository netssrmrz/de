(function($) 
{
  $(document).ready(function() 
  {
		"use strict";
		
		// MOUSE MASK 
		var $window = $(window);
		var windowWidth = $window.width();
		var windowHeight = $window.height();
		var mousePos = {x:windowWidth/2,y:windowHeight/2};

		$(window).resize(function(){
		  windowWidth = $window.width();
		  windowHeight = $window.height();
		});

		clip(mousePos);

		$(document).mousemove(function(e){
		  mousePos = {x:e.pageX,y:e.pageY};
		  clip(mousePos);
		});

    function clip(mousePos) 
    {
		  var pourcPos = {'x':mousePos.x * 100 / windowWidth * 2, 'y':mousePos.y * 100 / windowHeight};
		  var gapX = pourcPos.x * 30 / 200 - 15;
		  var gapY = (15 *(pourcPos.y * 30 / 100 - 15)) / 100;
		  var pointTop;
		  var pointBottom;
      if (pourcPos.y<50) 
      {
        pointTop = 150 - pourcPos.x + gapY * gapX;
        pointBottom = 150 - pourcPos.x;
      } 
      else 
      {
        pointTop = 150 - pourcPos.x;
        pointBottom = 150 - pourcPos.x - gapY * gapX;
		  }
      if (pourcPos.x<100) 
      {
        $('.split-back').addClass('on');
        $('.split-front').removeClass('on');
      }
      else if (pourcPos.x>100) 
      {
        $('.split-back').removeClass('on');
        $('.split-front').addClass('on');
      } 
      else 
      {
        $('.split-back').add('.split-front').removeClass('on');
		  }
		  $('.split-front').css({'clip-path':'polygon('+pointTop+'% 0%, 100% 0%, 100% 100%, '+pointBottom+'% 100%)'});
		}
		
		// INT HERO FADE
    var divs = $('.int-hero .inner');
    $(window).on('scroll', function() {
    var st = $(this).scrollTop();
    divs.css({ 'opacity' : (1 - st/300) });
    });
		
		// PARALLAX
    $.stellar({
      horizontalScrolling: false,
      verticalOffset: 0,
      responsive:true
    });
		
		// FOOTER HEIGHT CALCULATION	
    const height = $('.footer').innerHeight()+50;
    $('.footer-spacing').css({'height': height});
		
		// DATA BACKGROUND IMAGE
    var pageSection = $(".bg-image");
    pageSection.each(function(indx){
      if ($(this).attr("data-background")){
        $(this).css("background-image", "url(" + $(this).data("background") + ")");
      }
    });
	
		// DATA BACKGROUND COLOR
			var pageSection = $(".bg-color");
			pageSection.each(function(indx){
				if ($(this).attr("data-background")){
					$(this).css("background-color", $(this).data("background"));
				}
			});
		
		// REMOVE PERSPECTIVE EFFECT ON MOBILE
    if ($(window).width() < 991) 
    {
      $('.works figure').removeClass('perspective-box');
    }
		
    var ua = navigator.userAgent.toLowerCase(); 
    if (ua.indexOf('safari') != -1) 
    { 
      if (ua.indexOf('chrome') > -1) 
      {
        $('.works figure').addClass('perspective-box');
      } 
      else 
      {
        $('.works figure').removeClass('perspective-box');
      }
    }
	});

  // SLIDER
  var swiper = new Swiper('.swiper-container', {
    speed: 600,	
    parallax: true,
    loop: true,
      autoplay: {
      delay: 4500,
      disableOnInteraction: false,
      },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // WOW ANIMATION 
  wow = new WOW(
  {
    animateClass: 'animated',
    offset:       50
  }
  );
  wow.init();

  // MASONRY
  $(window).load(function(){
    $('.works').isotope({
      itemSelector: '.works li',
      percentPosition: true
    });
  });

  // ISOTOPE FILTER
  var $container = $('.works');
  $container.isotope(
  {
    filter: '*',
    animationOptions: 
    {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });
  $('.isotope-filter li a').click(function()
  {
    $('.isotope-filter li a.current').removeClass('current');
    $(this).addClass('current');

    var selector = $(this).attr('data-filter');
    $container.isotope(
    {
      filter: selector,
      animationOptions: 
      {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  }); 
})(jQuery);