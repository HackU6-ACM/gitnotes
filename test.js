
var currentURL = window.location.href;

// just modify the body of the code
var doc = document.body.innerHTML;
var tbody_beg = "<tbody>";
var tbody_end = "</tbody>";
var cut_beginning = doc.indexOf(tbody_beg);
var cut_ending = doc.indexOf(tbody_end);
var body = doc.substring(cut_beginning, cut_ending);



/*
	
*/
function addPicture(){
	var picture = document.createElement("img");
	var getPicture = prompt("Please enter the file name", "snowoctocat.png");
	
	if (getPicture == null || getPicture == "") {
		txt = "User cancelled the prompt.";
	} else {
		txt = getPicture;
		}
	 x.setAttribute("src", getPicture);
	 x.setAttribute("width", "304");
     x.setAttribute("height", "228");
	 
	 
	 body.appendChild(picture);
	 
	 
}	
addPicture();


document.body.innerHTML = doc;
