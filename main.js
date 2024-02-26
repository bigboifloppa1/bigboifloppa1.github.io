var a = navigator.geolocation;
var btn = document.querySelector('.btn');
var div = document.querySelector('.div');

function getLocation() {
  if (navigator.geolocation) {
    a.getCurrentPosition((position) => {
      document.body.innerHTML = `<h1> latitude: ${position.coords.latitude}  <br/> longitude: ${position.coords.longitude} </h1> <br/> <div class = \"div\"> <p class=\"googleit\"> google it ;) ${position.coords.latitude},  ${position.coords.longitude} </p> </div>`;
    });
  }
}

function handleOrientationChange() {
  if (window.orientation !== 0) {
    //landscape
    //.btn
    btn.style.width = "10%";
    btn.style.height = "10%";
  } else {
    //portrait
    //.btn
    btn.style.width = "20%";
    btn.style.height = "5%";
    //.googleit
    googleit.style.left = "-1000px";
  }
}

setInterval(() => {
  handleOrientationChange();
  
  window.addEventListener("orientationchange", handleOrientationChange);
},10);

