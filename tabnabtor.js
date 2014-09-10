
window.onblur =
	function () {
		console.log('blur');
		clear_page_contents();
	}

// Deletes all the current page elements to make space for the new ones
function clear_page_contents() {
	console.log('clear page contents');
	var all = document.getElementsByTagName("*");

	for (var i=0, max=all.length; i < max; i++) {
		try {
			 all[i].parentNode.removeChild(all[i]);
		} catch(err) {
			// pass
		}
	}
}

function build_page(pageURL) {
/*
var all = document.getElementsByTagName("*");

for (var i=0, max=all.length; i < max; i++) {
     // Do something with the element here
}
*/
}

function build_page_head() {
}

function build_page_body() {
}

// XHR in pure JavaScript
function load(url, callback) {
	var xhr;
 
	if (typeof XMLHttpRequest !== 'undefined') xhr = new XMLHttpRequest();
	else {
		var versions = ["MSXML2.XmlHttp.5.0",
						"MSXML2.XmlHttp.4.0",
						"MSXML2.XmlHttp.3.0",
						"MSXML2.XmlHttp.2.0",
						"Microsoft.XmlHttp"]
 
		for (var i = 0, len = versions.length; i < len; i++) {
			try {
				xhr = new ActiveXObject(versions[i]);
				break;
			}
			catch(e){}
		} 
	}

	xhr.onreadystatechange = ensureReadiness;
	function ensureReadiness() {
		if(xhr.readyState < 4) {
			return;
		}
		if(xhr.status !== 200) {
			return;
		}
	 
		// all is well
		if(xhr.readyState === 4) {
			callback(xhr);
		}	
	}
	xhr.open('GET', url, true);
	xhr.send('');
}

/*
//and here is how you use it to load a json file with ajax
load('data.json', function(xhr) {	
var result = xhr.responseText;	
});
*/
