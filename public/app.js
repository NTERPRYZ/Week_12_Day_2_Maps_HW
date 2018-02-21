const initialize = function(){

  const mapDiv    = document.getElementById('main-map');
  const center    = {lat: 41.881832, lng: -87.623177};
  const discovery = {lat: 56.4569239, lng: -2.967926};
  const zoom      = 10;
  const mapType   = 'hybrid'
  const mainMap   = new MapWrapper(mapDiv, center, zoom, mapType);

  // const mapTilt   = this.googleMap.setTilt(45);
  // this.googleMap.setHeading(60);

  mainMap.addMarker(center)
  mainMap.addMarker(discovery)
  mainMap.addClickEvent();
  mainMap.getMarketWindow()

}

const handleButtonClick = function () {
  let center = {lat: 41.881832, lng: -87.623177};
  this.initialize()
}


const app = function(){
  const button  = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);
}

document.addEventListener('DOMContentLoaded', initialize)
