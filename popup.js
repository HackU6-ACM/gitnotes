


var currentURL = window.location.href;

document.body.innerHTML = currentURL;

var attributes = currentURL + "/.attributes"

var client = new XMLHttpRequest();
client.open('GET', attributes);
client.onreadystatechange = function() {
    alert(client.responseText);
}
client.send();
