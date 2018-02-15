$(document).ready(function(){

  // Включение слайдера в промоблоке на главной странице
  $('#photo-slider').owlCarousel({
    loop:true,
    nav:true,
    items:1,
  });

  // Клик на стрелке верхнего блока
  $('#arrow-bottom').on('click', function(e){
    e.preventDefault();
    $('body,html').animate({'scrollTop': $('#first-content-block').offset().top},500);
  });

  // Положение стрелки первого экрана на мобилке
  if (window.isMobile !== undefined) {
    // console.log(isMobile);
    if(isMobile.any) {
      $('#arrow-bottom').attr('style', 'transform: translateX(-50%) translateY(-50px)');
    }
  }
});
