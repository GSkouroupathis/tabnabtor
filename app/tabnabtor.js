
window.onblur =
	function () {
		clear_page_contents();
		build_page("http://www.astrocamel.com");
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

function build_page(pageName) {
}


function build_page_head() {
}

function build_page_body() {
}

