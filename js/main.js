// header 
$(function() {
  var windowHeight = $(window).height();
  $(window).scroll(function() {
    if ($(this).scrollTop() > windowHeight) {
      $('.nav-en').addClass('change');
    } else {
      $('.nav-en').removeClass('change');
    }
  });
});

// slider
$(function() {
  $('#kvSlider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
  });
});

// nav-menu
$(function() {
  $('#hamburger').on('click', function() {
    $(this).toggleClass('rotate');
    $('#navMenu').toggleClass('open');
    $('html').toggleClass('is_fixed');
  });
  $('.nav-link').on('click', function() {
    $(this).removeClass('rotate');
    $('#navMenu').removeClass('open');
    $('#hamburger').removeClass('rotate');
    $('html').removeClass('is_fixed');
  });
});

// wow(animation)
$(function() {
  new WOW().init();
});

// splide
const splide = new Splide(".splide", {
  type: "loop",
  padding: "10%",
  mediaQuery: "min",
  breakpoints: {
    960: {
      destroy: true,
    },
  },
});
splide.mount();