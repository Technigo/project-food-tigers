/* const apiKey = "2cd30dbbc9e3c68b88470a4a41597105"; */

const Flick_URL = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags="

const StartGrid = () => {
  try {
    let script = document.createElement('script')
    script.src = Flick_URL + "cat";
    document.querySelector('head').appendChild(script);
  } catch {
    document.getElementById("error").innerHTML = "error";
  }
}
window.onload = StartGrid;

const JavaScriptFetch = () => {
  let script = document.createElement('script')
  script.src = Flick_URL + document.getElementById("search").value;
  document.querySelector('head').appendChild(script);
}

const jsonFlickrFeed = (data) => {
  let image = ""; data.items.forEach(function (element) {
    image += "<li><img src=\"" + element.media.m + "\"/></li>";
  });
  document.getElementById("outputDiv").innerHTML = image;
}