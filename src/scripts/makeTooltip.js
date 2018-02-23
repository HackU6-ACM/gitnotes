String.prototype.replaceAll = function(searchStr, replaceStr) {
  var str = this;

  // No match exists in string
  if ( str.indexOf(searchStr) === -1 ) {
    return str;
  }

  // Replace and remove the first match
  return ( str.replace(searchStr, replaceStr)).replaceAll(searchStr, replaceStr);
}

function makeTooltip(attributeFileURL, input, thisFileName) {
  var master = {};
  // Load JSON file into dictionary
  $.getJSON(attributeFileURL, function(data) {
    $.each( data, function( mkey, mval ) {
      var sub = {}
      $.each( mkey, function( skey, sval ) {
        sub[skey] = sval
      });
      master[mkey] = sub
    });
  });



  dict = master[thisFileName]

  keyTooltip = ""
  // For each key replace instaces in input with tooltip containing value
  for ( var key in dict ) {
    var value = dict[key];

    keyTooltip = "<button type=\"button\" class=\"btn btn-default btn-huge\" data-placement=\"top\" title=\"Tooltip on left\" onmouseenter=\"$(this).tooltip('show')\">tooltip</button>"
  }

  return input.replaceAll(key, keyTooltip)
}
