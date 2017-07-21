import "./script.js";
import "./owl.carousel.min.js";
function showCards(obj) {
  var posts = obj;
  for (var i = 0; i < posts.length; i++) {
    var h2 = document.createElement("h2");
    h2.textContent = "date" + posts[i].title.rendered;
    var div = document.getElementById("test");
    div.appendChild(h2);
  }
}

var requestURL = "http://tugi.io/wp-json/wp/v2/posts";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
  var posts = request.response;
  showCards(posts);
};