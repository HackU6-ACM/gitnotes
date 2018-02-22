
var currentURL = window.location.href;
var rawURL = currentURL.replace("https://github.com/", "https://raw.githubusercontent.com/");
var attributes = rawURL + "/.attributes";

var client = new XMLHttpRequest();
client.open('GET', attributes);
client.onreadystatechange = function() {
   attributes = client.responseText;
}

function parse_attributes(Attributes)
{
    var dict = {};
    
    var str = "test";

    dict[str] = "comments";
}

var attributes_dictionary = parse_attributes(attributes);

var doc = document.body.innerHTML;

var tbody_beg = "<tbody>";
var tbody_end = "</tbody>";

var cut_beginning = doc.indexOf(tbody_beg);
var cut_ending = doc.indexOf(tbody_end);

var body = doc.substring(cut_beginning, cut_ending);

var mod_body = body.replace(/GitNotes/g, "<a href='https://www.google.com'> test </a>");

doc = doc.replace(body, mod_body);

document.body.innerHTML = doc;


