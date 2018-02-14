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

var mapPoints = [
  [
    'Point',
    59.95016094,
    30.31612718,
    '<div class="some-class"><h2>Header</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque.</p></div>'
  ],
];

// Стилизация карты
// Подробнее о стилях: https://developers.google.com/maps/documentation/javascript/styling?hl=ru
var mapStyle = [{
  featureType: 'all',
  stylers: [{ saturation: -100 }]
}];

// Будущее инфоокно, возникающее по клику на маркере карты
var mapInfoWindow = null;

// Инициализация карты (вызывается после загрузки скрипта)
function initMap() {
  // Найдем тег карты по id
  var mapDiv = document.getElementById('map');
  // Определим центр карты
  var center = {lat: 59.95016094, lng: 30.31612718};
  // Создадим объект карты
  var map = new google.maps.Map(mapDiv, {
    zoom: 13,
    center: center,
    disableDefaultUI: true,
    styles: mapStyle
  });
  //  Вызовем функцию, которая расставит маркеры
  setMapMarkers(map);
  // Создадим объект инфоокна
  mapInfoWindow = new google.maps.InfoWindow({
    content: "loading...",
    maxWidth: 200
  });
  // Начнем следить за ресайзом карты
  map.addListener('resize', function() {
    map.panTo(center); // Отцентруем
  });
  // Начнем следить за ресайзом окна (важно, если ресайз окна влияет на размер блока карты)
  google.maps.event.addDomListener(window, 'resize', function(){
    google.maps.event.trigger(map, 'resize'); // Вызовем событие ресайза карты
  });
  // Начнем следить за изменением центра, через 3 с. вернем центр по умолчанию
  // map.addListener('center_changed', function() {
  //   window.setTimeout(function() {
  //     map.panTo(center);
  //   }, 3000);
  // });
}

// Функция проставляет маркеры карты
function setMapMarkers(map) {
  // Обходим массив маркеров и проставляем каждый
  for (var i = 0; i < mapPoints.length; i++) {
    // Переменная с данными этой точки
    var point = mapPoints[i];
    // Создаем маркер карты
    var marker = new google.maps.Marker({
      position: {lat: point[1], lng: point[2]},
      map: map,
      title: point[0],
      html: point[3],
    });
    // Начинаем следить за кликом на маркере
    google.maps.event.addListener(marker, 'click', function () {
      mapInfoWindow.setContent(this.html);
      mapInfoWindow.open(map, this);
    });
  }
}
