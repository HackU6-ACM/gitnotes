
var currentURL = window.location.href;
var rawURL = currentURL.replace("https://github.com/", "https://raw.githubusercontent.com/");
var attributes = rawURL + "/.attributes";

var client = new XMLHttpRequest();
client.open('GET', attributes);
client.onreadystatechange = function() {
   document.body.innerHTML = client.responseText;
}

var doc = document.body.innerHTML;

doc = doc.replace(/git/gi, "<a href='https://www.google.com'> test </a>");
document.body.innerHTML = doc;


console.log(doc);
