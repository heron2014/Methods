$(document).ready(function (){

  console.log('jquery is working!');


function changeText(){
  var menuText = document.getElementById('MD-menu-text');
  if(menuText.innerHTML ==='menu'){
    menuText.innerHTML = 'close';
  } else {
    menuText.innerHTML = 'menu';
  }
}
function initialize() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    center: new google.maps.LatLng(51.515514, -0.096721),
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);

  $(window).resize(function() {
  // (the 'map' here is the result of the created 'var map = ...' above)
  google.maps.event.trigger(map, "resize");
  });
  var marker = new google.maps.Marker({
  position: mapOptions.center,
  map: map,
  title: "16 St Martin's Le Grand"
  });
}
google.maps.event.addDomListener(window, 'load', initialize);



$(".menu-toggle").click(function (){
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
  $('#openModal').toggleClass('modalDialog');
  $('.MD-menu-items').toggleClass('show');
  $('.one').toggleClass('MD-x-white');
  $('.three').toggleClass('MD-x-white');
  $('.MD-menu').toggleClass('MD-text-white');
  changeText();
});







});



  

