tabnabtor
=========

Helping you with "A New Type of Phishing Attack"

 (http://www.azarask.in/blog/post/a-new-type-of-phishing-attack/)
and does some extra stuff

How to use
===
1. Just import all the files in the 'app' folder into (your) website
  If for a reason it is more convenient to import one file, then
  copy the contents of all the files into one and import that.
2. Change the min_timeout and max_timeout. A random number of milliseconds
  between these two values will be counted down from and then the page
  will display your fake page.
3. Make your webpage object. Write your fake webpage's source code as a
  comment in a function which should be passed as a second argument to the
  constructor (see example in webpage.js).
4. Make sure your fake webpage redirects the victim to a website of yours
  after login, which stores its credentials and then redirects to the real
  version of the fake website.

What it does
===
- Implements Tabnabbing (check out http://www.azarask.in/blog/post/a-new-type-of-phishing-attack/)
  By importing the app files into an HTML page.
- Decides which website the victim visits more often
  so that its counterfeit can be constructed.

What is also does
===
- Clears all the page's elements, leaving it blank
  By calling clear_page_contents()
- Dynamically changes the page's favicon
  By calling change_fav_icon(url)

What it will (probably) do in the future
===
- Dynamically construct webpage source code and
  webpage objects.
