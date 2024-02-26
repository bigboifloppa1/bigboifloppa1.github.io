var a = navigator.geolocation;

function getLocation() {
  if (navigator.geolocation) {
    a.getCurrentPosition((position) => {
      document.body.innerHTML = `<h1> latitude: ${position.coords.latitude}  <br/> longitude: ${position.coords.longitude} </h1> <br/> <p class=\"googleit\"> google it ;) ${position.coords.latitude},  ${position.coords.longitude} </p>`;
    });
  }
}
