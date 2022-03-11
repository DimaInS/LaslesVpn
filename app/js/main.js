$(function() {
  $('.reviews__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: false,
    dots: true,
    appendArrows: $('.reviws__arrows'),
    appendDots: $('.reviws__dots'),
  
  });
});