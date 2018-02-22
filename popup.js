
var currentURL = window.location.href;
var rawURL = currentURL.replace("https://github.com/", "https://raw.githubusercontent.com/");
var attributes = rawURL + "/.attributes";

var client = new XMLHttpRequest();
client.open('GET', attributes);
client.onreadystatechange = function() {
   attributes = client.responseText;
   //document.body.innerHTML = attributes;
}
client.send();


var dict = {};
var key = attributes.substring("KEY START", "KEY END");
key = key.replace("KEY START", "");
key = key.replace("KEY END", "");
var value = attributes.substring("VALUE START", "VALUE END");
value = value.replace("VALUE START", "");
value = value.replace("VALUE END", "");
dict[key] = value;

var doc = document.body.innerHTML;

var tbody_beg = "<tbody>";
var tbody_end = "</tbody>";

var cut_beginning = doc.indexOf(tbody_beg);
var cut_ending = doc.indexOf(tbody_end);

var body = doc.substring(cut_beginning, cut_ending);

var mykey = dict[key];
var re = new RegExp(dict[key], "g");

var mod_body = body.replace(re, "<div class='highlighted' <a href='https://www.google.com'> test </a></div>");

doc = doc.replace(body, mod_body);

document.body.innerHTML = attributes;

