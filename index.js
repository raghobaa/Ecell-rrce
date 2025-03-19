
$(document).ready(function() {
  $('.smoothscroll').on('click', function(e) {
      e.preventDefault();
      
      var target = this.hash;
      var $target = $(target);
      
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
          window.location.hash = target;
      });
  });

  
  $(window).scroll(function() {
      if ($(window).scrollTop() > 100) {
          $('.main_nav').addClass('sticky').css('background-color', '#fff');
      } else {
          $('.main_nav').removeClass('sticky').css('background-color', 'transparent');
      }
  });

  $('.mobile-toggle').click(function() {
      $('.main_nav').toggleClass('open-nav');
  });

  $('.main_nav li a').click(function() {
      if ($('.main_nav').hasClass('open-nav')) {
          $('.main_nav').removeClass('open-nav');
      }
  });


  gsap.from(".heading", {opacity: 0, y: 50, duration: 1, delay: 0.2, ease: "power2.out"});
  gsap.from(".subheading", {opacity: 0, y: 50, duration: 1, delay: 0.4, ease: "power2.out"});
  gsap.from(".feature", {opacity: 0, y: 50, duration: 1, delay: 0.2, stagger: 0.2, ease: "power2.out"});
  gsap.from(".service", {opacity: 0, y: 50, duration: 1, delay: 0.2, stagger: 0.2, ease: "power2.out"});
  gsap.from(".project", {opacity: 0, y: 50, duration: 1, delay: 0.2, stagger: 0.2, ease: "power2.out"});
});