svg4everybody(); // иницализация полифила для IE

$(document).ready(function(){

  // Включение слайдера в промоблоке на главной странице
  $('#promo-slider').owlCarousel({
    loop:true,
    nav:true,
    items:1,
  });
});

// Если на проекте нет jQuery, но хочется $( document ).ready... (IE9+)
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
