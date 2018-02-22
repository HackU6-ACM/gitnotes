$.getScript("", function() {
  alert("Script loaded but not necessarily executed.");
})

String.prototype.replaceAll = function(searchStr, replaceStr) {
  var str = this;

  // No match exists in string
  if ( str.indexOf(searchStr) === -1 ) {
    return str;
  }

  // Replace and remove the first match
  return ( str.replace(searchStr, replaceStr)).replaceAll(searchStr, replaceStr);
}

function makeTooltip(attributeFile, input, thisFileName) {
  masterDict = d3.tsv(attributes)
  dict = masterDict[thisFileName]

  // For each key replace instaces in input with tooltip containing value
  for ( var key in dict ) {
    var value = dict[key];

    keyTooltip = "<button type=\"button\" class=\"btn btn-default btn-huge\" data-placement=\"top\" title=\"Tooltip on left\" onmouseenter=\"$(this).tooltip('show')\">tooltip</button>"

    return input.replaceAll(key, keyTooltip)
  }
}
