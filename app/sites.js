/*
* sites.js
* part of nabtabtor.js
* 
* George Skouroupathis
*
*/

// Multi-line string trick
function hereDoc(f) {
  return f.toString().
      replace(/^[^\/]+\/\*!?/, '').
      replace(/\*\/[^\/]+$/, '');
}

// A site object
function site(url, src, styles) {
    this.url = url;
    this.getSource = hereDoc(src);
    this.getStyles = styles.map(hereDoc);
}

var site1 = new site("http://www.asdf.com",
					function() {/*!
<html>
<head>
	<title>ASDF</title>
</head>
<body>
	<b>asdf</b>
</body>
</html>
*/},
[
					function() {/*!
style stuff 1;
style stuff 2
*/},
					function() {/*!
style stuff 1;
style stuff 2
*/}
]
);









