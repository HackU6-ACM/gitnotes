String.prototype.replaceAll = function(searchStr, replaceStr) {
  var str = this;

  // No match exists in string
  if ( str.indexOf(searchStr) === -1 ) {
    return str;
  }

  // Replace and remove the first match
  return ( str.replace(searchStr, replaceStr)).replaceAll(searchStr, replaceStr);
}


function getJSON(url) {
  var Httppreq = new XMLHttpRequest();
  Httppreq.open("GET", url, false);
  Httppreq.send(null);
  return Httppreq.responseText;
}


function makeTooltip(attributeFileURL, input, thisFileName) {
  var json_obj = JSON.parse(getJSON(attributeFileURL));

  for ( var fileName in json_obj ) {
    if ( fileName == thisFileName ) {
      var content = json_obj[fileName]
      for ( var key in content ) {
        var val = content[key];

        keyTooltip = "<button type=\"button\" class=\"btn btn-default btn-huge\" data-placement=\"top\" title=\"Tooltip on left\" onmouseenter=\"$(this).tooltip('show')\">tooltip</button>";
        input = input.replaceAll(key, keyTooltip);
      }

      return input
    }
  }
}
