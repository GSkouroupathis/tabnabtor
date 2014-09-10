
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

