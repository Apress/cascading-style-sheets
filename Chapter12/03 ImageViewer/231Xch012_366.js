/* function to show and hide the thumbnails */

function showhide (id){ 
			if (document.getElementById) { 
				obj = document.getElementById(id); 
				if (obj.style.display == "block") { 
					obj.style.display = "none"; 
				} else { 
					obj.style.display = "block"; 
				}
			}
		}
		
function showvis (id){ 
			if (document.getElementById) { 
				obj = document.getElementById(id); 
				if (obj.style.visibility == "visible") { 
					obj.style.visibility = "hidden"; 
				} else { 
					obj.style.visibility = "visible"; 
				}
			}
		}

/* function to set a cookie */

function setCookie (name, value, expires) {
	document.cookie = name + "=" + escape(value) + "; expires=" + expires.toGMTString() + "; path=/";
	}
	
/* function to set user prefs for thumbs */

function setPref (id) {
	if (document.getElementById) {
		obj = document.getElementById(id);
		var toSet = "";
		if (obj.style.display == "none") {
			toSet = "true";
			}
		else {
			toSet = "false";
			}
	}
	
	var expdate = new Date (); // create date object 
	expdate.setTime(expdate.getTime() + 1000 * 60 * 60 * 24 * 365); // get current and add one year to it 
	setCookie("thumbsOff",toSet,expdate);
	}
	
/* function to read cookie and set display of picInPic */

function setState (id, name) {
	var cookies = document.cookie;
	var startpos = cookies.indexOf(name)+name.length+1; 
	var endpos = cookies.indexOf(";",startpos)-1; 
	if (endpos == -2) endpos = cookies.length; 
	var result = cookies.substring(startpos,endpos);
	if (document.getElementById) { 
		obj = document.getElementById(id); 
		if (result == "false") { 
			obj.style.display = "block"; 
			}
		}
	}




 