$(document).ready(function(){

  // Включение слайдера в промоблоке на главной странице
  $('#photo-slider').owlCarousel({
    loop:true,
    nav:true,
    items:1,
  });

  // Клик на стрелке верхнего блока
  $('#arrow-bottom').on('click', function(){
    $('body,html').animate({'scrollTop': $('#first-content-block').offset().top},500);
  });
});
