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
function webpage(url, src, styles) {
    this.url = url;
    this.getSource = hereDoc(src);
    this.getStyles = styles.map(hereDoc);
}

var webpage1 = new webpage("http://www.astrocamel.com",
					function() {/*!
<!DOCTYPE html>
<html lang="en"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <title>Astrocamel.com</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href="http://astrocamel.com/marketing-narrow_files/bootstrap.css" rel="stylesheet">
    <style type="text/css">
      body {
        padding-top: 20px;
        padding-bottom: 40px;
      }


      .container-narrow {
        margin: 0 auto;
        max-width: 700px;
      }
      .container-narrow > hr {
        margin: 15px 0;
      }


      .jumbotron {
        margin: 0;
        text-align: center;
      }
      
      img.meLOL {
      margin: 0 0 5px 0;
	transition: all 0.25s ease-out;
	-webkit-border-radius: 78px;
     -moz-border-radius: 78px;
          border-radius: 78px;
          			border: 1px solid #EEE;
          opacity:0.85;
filter:alpha(opacity=85); 
      }
      
      img.meLOL:hover {
	-moz-box-shadow: 0 0 15px #CF6;
		-webkit-box-shadow: 0 0 15px #CF6;
			box-shadow: 0 0 15px #1C4E80;

			          opacity:1;
filter:alpha(opacity=100); 
			}

      .jumbotron h1 {
        font-size: 33px;
        line-height: 0.4;
      }
      .jumbotron .btn {
        font-size: 21px;
        padding: 14px 24px;
      }


      .marketing {
        margin: 50px 0;
      }
      .marketing p + h4 {
        margin-top: 28px;
      }
    </style>
    <link href="http://astrocamel.com/marketing-narrow_files/bootstrap-responsive.css" rel="stylesheet">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="../assets/js/html5shiv.js"></script>
    <![endif]-->

    <!-- Fav and touch icons -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="http://twitter.github.io/bootstrap/assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="http://twitter.github.io/bootstrap/assets/ico/apple-touch-icon-114-precomposed.png">
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="http://twitter.github.io/bootstrap/assets/ico/apple-touch-icon-72-precomposed.png">
                    <link rel="apple-touch-icon-precomposed" href="http://twitter.github.io/bootstrap/assets/ico/apple-touch-icon-57-precomposed.png">
                                   <link rel="shortcut icon" href="http://astrocamel.com/marketing-narrow_files/favico.ico"s>
  </head>

  <body>

    <div class="container-narrow">

      <div class="masthead">
        <ul class="nav nav-pills pull-right">
          <li class="active"><a href="#">About</a></li>
          <li><a href="http://gist.github.com/GSkouroupathis/">Snippets</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <h3 class="muted"><img src="http://astrocamel.com/marketing-narrow_files/ac.jpg" /> Astrocamel.com</h3>
      </div>

      <hr>

      <div class="jumbotron">
      	<a href="#">
          <img src="http://astrocamel.com/marketing-narrow_files/me.jpg" class="meLOL" />
          </a>
     		<p class="lead">My name is</p>
        <h1>George Skouroupathis</h1>
        <p class="lead">and this is my portfolio.</p>
        <a class="btn btn-large btn-success" href="http://astrocamel.com/marketing-narrow_files/cv.pdf">View my CV</a>
      </div>

      <hr>

      <div class="row-fluid marketing">
        <div class="span12">
          <a href="http://github.com/GSkouroupathis/">
          <img src="http://astrocamel.com/marketing-narrow_files/gh.jpg" class="github" />
          </a>
				
					<a href="http://www.linkedin.com/profile/view?id=211473247&trk=nav_responsive_tab_profile">
          <img src="http://astrocamel.com/marketing-narrow_files/li.jpg" class="linkedin" />
        	</a>
        	
        	<a href="https://www.facebook.com/george.skouroupathis">
          <img src="http://astrocamel.com/marketing-narrow_files/fb.jpg" class="facebook" />
          </a>
          
          <a href="https://plus.google.com/109182550444844999415/posts">
          <img src="http://astrocamel.com/marketing-narrow_files/gp.jpg" class="gplus" />
          </a>
        </div>
      </div>

      <hr>

      <div class="footer">
        <p>Copyright © Astrocamel.com since 2008 - <a href="https://twitter.com/gskouroupathis">I don't Tweet</a></p>
      </div>

    </div> <!-- /container -->

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="marketing-narrow_files/jquery.js"></script>
    <script src="marketing-narrow_files/bootstrap-transition.js"></script>
    <script src="marketing-narrow_files/bootstrap-alert.js"></script>
    <script src="marketing-narrow_files/bootstrap-modal.js"></script>
    <script src="marketing-narrow_files/bootstrap-dropdown.js"></script>
    <script src="marketing-narrow_files/bootstrap-scrollspy.js"></script>
    <script src="marketing-narrow_files/bootstrap-tab.js"></script>
    <script src="marketing-narrow_files/bootstrap-tooltip.js"></script>
    <script src="marketing-narrow_files/bootstrap-popover.js"></script>
    <script src="marketing-narrow_files/bootstrap-button.js"></script>
    <script src="marketing-narrow_files/bootstrap-collapse.js"></script>
    <script src="marketing-narrow_files/bootstrap-carousel.js"></script>
    <script src="marketing-narrow_files/bootstrap-typeahead.js"></script>

  

</body></html>

<!-- Hosting24 Analytics Code -->
<script type="text/javascript" src="http://stats.hosting24.com/count.php"></script>
<!-- End Of Analytics Code -->

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







