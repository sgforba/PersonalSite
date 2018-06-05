(function(){
    var header = $('.desktop-nav');
    var body = $('body');
    var hamburger = $('.hamburger');
    var mobileNav = $('.mobile-nav');
    if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        var isMobile = true;
    }

$(document).ready(function() { 
    $('.slick-container').slick({
        dots: false,
        infinite: true,
        arrows: false,
        centerMode: true,
        autoplay: true,
        speed: 500,
        variableWidth: true,
        slidesToShow: 1,
        cssEase: 'linear'
    });
});

$(window).resize(function() {
    $('.slick-container').slick('resize');
});

function scrollHeader(x) {
	if (typeof x !== "undefined") {

		var	pos = x.offset().top,
				win = $(window);	
		win.on("scroll", function() {
    		win.scrollTop() >= pos ? x.addClass("scrolled") : x.removeClass("scrolled");      
		});			
    }
}    
scrollHeader(header);

$('.header-nav a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );

    if( target.length ) {    
        event.preventDefault();
        target[0].id != 'home' ? header.addClass("scrolled") :  header.removeClass("scrolled");
        var scrollPosition = target.offset().top-50;
        $('html, body').animate({
            scrollTop: scrollPosition
        }, 300);     
    }   
});

$('.scroll-down').on('click', function(event) {
    var target = $( $(this).attr('href') );

    if( target.length ) {    
        event.preventDefault();
        target[0].id != 'home' ? header.addClass("scrolled") :  header.removeClass("scrolled");
        var scrollPosition = target.offset().top-50;
        $('html, body').animate({
            scrollTop: scrollPosition
        }, 300);     
    }   
});

hamburger.on('click', function() {
    $(this).addClass('active');
    $(this).toggleClass('open');
    var classCheck = mobileNav.hasClass('active');
    classCheck === true ? mobileNav.removeClass('active'): mobileNav.addClass('active');   
})

$('.mobile-nav a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    mobileNav.removeClass('active');
    if( target.length ) {    
        event.preventDefault();
        target[0].id != 'home' ? header.addClass("scrolled") :  header.removeClass("scrolled");
        var scrollPosition = target.offset().top-50;
        $('html, body').animate({
            scrollTop: scrollPosition
        }, 300);     
    }   
});



})();