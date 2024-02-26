var a = navigator.geolocation;
var btn = document.querySelector('.btn');

function getLocation() {
  if (navigator.geolocation) {
    a.getCurrentPosition((position) => {
      document.body.innerHTML = `<h1> latitude: ${position.coords.latitude}  <br/> longitude: ${position.coords.longitude} </h1> <br/> <p class=\"googleit\"> google it ;) ${position.coords.latitude},  ${position.coords.longitude} </p>`;
    });
  }
}

function handleOrientationChange() {
  if (window.orientation !== 0) {
    btn.style.width = "10%";
    btn.style.height = "10%";
  } else {
    btn.style.width = "20%";
    btn.style.height = "5%";
  }
}

setInterval(() => {
  handleOrientationChange();
  
  window.addEventListener("orientationchange", handleOrientationChange);
},500);

