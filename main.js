var a = navigator.geolocation;

function getLocation() {
  if (navigator.geolocation) {
    a.getCurrentPosition((position) => {
      document.write = (`<h1> latitude: ${position.coords.latitude}  <br/> longitude: ${position.coords.longitude} </h1>`);
    });
  }
}