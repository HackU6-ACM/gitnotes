
var currentURL = window.location.href;
var rawURL = currentURL.replace("https://github.com/", "https://raw.githubusercontent.com/");
rawURL = rawURL.substring(0, rawURL.lastIndexOf('/'));
var attributes = rawURL + "/master/.attributes";

var client = new XMLHttpRequest();
client.open('GET', attributes);
client.onreadystatechange = function() {
   attributes = client.responseText;
   document.body.innerHTML = attributes;
}
client.send();

var doc = document.body.innerHTML;

var tbody_beg = "<tbody>";
var tbody_end = "</tbody>";

var cut_beginning = doc.indexOf(tbody_beg);
var cut_ending = doc.indexOf(tbody_end);

var body = doc.substring(cut_beginning, cut_ending);




var mod_body = body.replace(/printer/g, "<div class='highlighted' <a href='https://www.google.com'> test </a></div>");

doc = doc.replace(body, mod_body);

//document.body.innerHTML = doc;

