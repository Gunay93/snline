$( document ).ready(function() {
    $('.mouse-btn-down').click(function(){
        var h = $('.banner-section').height()
        window.scrollTo({top: h, behavior: 'smooth'});
    })
    $(window).scroll(function() {
		var footerh2 = $('.banner-section').height() + $('#references').height() + $('#about').height()  + $('#model').height() + $('#counter').height() + $('footer').height() - 100;
		var counth = $('.banner-section').height() + $('#references').height() + $('#about').height()  + $('#model').height() - 100;
		var footerh = $('.banner-section').height() + $('#references').height() + $('#about').height()  + $('#model').height() + $('#counter').height();
		var modelh = $('.banner-section').height() + $('#references').height() + $('#about').height() - 100;
		var refh = $('.banner-section').height() + $('#about').height() - 100;
		var refabout = $('.banner-section').height()/2;
        if($(window).scrollTop()>20){
            $('#navbar').removeClass('d-none');
        }
		else{$('#navbar').addClass('d-none');}
		if($(window).scrollTop()>modelh){
			$('.model-first img,.plus').addClass('fadeInDown').removeClass('d-none');
			$('.full-img-model').addClass('fadeInLeft').removeClass('d-none');
			$('.model-text').addClass('fadeInRight').removeClass('d-none');
			$('#model .logo-left').removeClass('d-none');
		}
		if($(window).scrollTop()>refh){
			$('.img-ref').addClass('fadeInUp');
			$('#references .ref-content span').addClass('fadeInLeft');
			$('#references h1').addClass('fadeInRight');
			$('#references p').addClass('fadeInLeft');
		}
		if($(window).scrollTop()>refabout){
			$('.addanim1').addClass('fadeInLeft');
			$('.addanim2').addClass('fadeInRight');
			$('.about-slogan').addClass('fadeInDown');
		}
		if($(window).scrollTop()>counth){
			$('#counter .column').addClass('fadeInDown').removeClass('d-none');
		}
		if($(window).scrollTop()>footerh){
			$('.footer-logo').addClass('fadeInUp');
			$('.fb,.insta,.yt,.ln,.footer-social-text,.footer-contact,.footer-links').addClass('fadeInDown');
		}
		if($(window).scrollTop()>footerh2){
			$('.addanim3,.addanim4,.addanim5').addClass('fadeInDown');
		}
    });
});
(function($) {
	"use strict";
	function bannerSlider() {
	    if ($(".banner-slider").length > 0) {
			var bannerSlider = new Swiper('.banner-slider', {
				spaceBetween: 0,
				slidesPerView: 1,
				mousewheel: false,
				height: 500,
				grabCursor: true,
				loop: true,
				speed: 1400,
				autoplay: {
				    delay: 4000,
                    disableOnInteraction: false
				},
				pagination: {
	                el: '.banner-slider-pagination',
	                clickable: true,
	            },
	            navigation: {
	                nextEl: '.banner-slider-button-next',
	                prevEl: '.banner-slider-button-prev',
	            },
			});
			bannerSlider.on('slideChange', function() {
	            var csli = bannerSlider.realIndex + 1,
	                curnum = $('#current');
	            TweenMax.to(curnum, 0.2, {
	                force3D: true,
	                y: -10,
	                opacity: 0,
	                ease: Power2.easeOut,
	                onComplete: function() {
	                    TweenMax.to(curnum, 0.1, {
	                        force3D: true,
	                        y: 10
	                    });
	                    curnum.html('0' + csli);
	                }
	            });
	            TweenMax.to(curnum, 0.2, {
	                force3D: true,
	                y: 0,
	                delay: 0.3,
	                opacity: 1,
	                ease: Power2.easeOut
	            });
	        });

	        function kpsc() {
                $(".slide-progress").css({
                    width: "100%",
                    transition: "width 4000ms"
                });
            }
            function eqwe() {
                $(".slide-progress").css({
                    width: 0,
                    transition: "width 0s"
                });
            }

	        kpsc();
            bannerSlider.on("slideChangeTransitionStart", function() {
                eqwe();
            });
            bannerSlider.on("slideChangeTransitionEnd", function() {
                kpsc();
            });
	        
	        var totalSlides = bannerSlider.slides.length - 2;
	        $('#total').html('0' + totalSlides);
		}


	}
	function windwLoad() {
		bannerSlider();
		setTimeout(function() {
	        $(".animInBottom").each(function(a) {
	            var b = $(this);
	            setTimeout(function() {
	                TweenMax.to(b, 1.2, {
	                    force3D: true,
	                    bottom: "0",
	                    ease: Expo.easeInOut
	                });
	            }, 230 * a);
	        });

	    }, 400);

	    setTimeout(function() {
	        $(".animInTop").each(function(a) {
	            var b = $(this);
	            setTimeout(function() {
	                TweenMax.to(b, 1.2, {
	                    force3D: true,
	                    top: "0",
	                    ease: Expo.easeInOut
	                });
	            }, 230 * a);
	        });

	    }, 800);
	}
	$(window).on('load', function() {
		windwLoad();
	});
})(window.jQuery);


