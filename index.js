function initialize() {
  const mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(40.7128, -74.006),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    minZoom: 2,
  };

  let map = new google.maps.Map(document.getElementById("map"), mapOptions);

  let infoWindow = new google.maps.InfoWindow();

  let marker = new google.maps.Marker({
    position: new google.maps.LatLng(36.6769, 43.4963),
    map: map,
    title: "Kyrgyzstan Bishkek",
  });
  marker.addListener("click", function () {
    infoWindow.setContent(marker.titele);
    infoWindow.open(map, marker);
  });

  google.maps.event.addDomListener(window, "resize", function () {
    map.setCenter(mapOptions.center);
  });
}

google.maps.event.addDomListener(window, "load", initialize);
