
var currentURL = window.location.href;
var rawURL = currentURL.replace("/https://github.com/", "https://raw.githubusercontent.com/");
var attributes = rawURL + "/.attributes"

document.body.innerHTML = attributes;

var client = new XMLHttpRequest();
client.open('GET', attributes);
client.onreadystatechange = function() {
   var response =client.responseText;
   document.body.innerHTML = response;
}
client.send();
