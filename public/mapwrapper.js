const MapWrapper = function(container, coords, zoom, mapType){
  this.googleMap = new google.maps.Map(container, {
    center:        coords,
    zoom:          zoom,
    mapTypeId:     'roadmap'
  })

MapWrapper.prototype.addMarker = function (coords) {
  const marker = new google.maps.Marker({
    position:   coords,
    map:        this.googleMap,
    icon:       "https://image.ibb.co/hxqWXc/aaeaaqaaaaaaaapkaaaajdywzjq2mj.jpg"
    // animation:  google.maps.Animation.DROP
  })
  // this.googleMap.setTilt(45);
  // this.googleMap.setHeading(60);
};

MapWrapper.prototype.addClickEvent = function () {
  google.maps.event.addListener(this.googleMap, 'click', function(event){
    const coords = {lat: event.latLng.lat(), lng: event.latLng.lng()}
    this.addMarker(coords)
  }.bind(this))
}



}
