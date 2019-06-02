//init
window.onload = function() {

  temp();
  timeDate();

  setInterval(function() {
    timeDate();
  }, 900);

  setTimeout(function(){typeString("welcome to the home directory for guy aldous", "0");}, 2000)
  setTimeout(function(){newLine('Guy is a web designer and developer from Melbourne, Australia')}, 8000);
  setTimeout(function(){newLine('How can I help you?')}, 16000);

  //<a href="/">Linkedin (y/n?)</a> | <a href="/">Lysdexia? (y/n?)</a> | <a href="/">Contact? (y/n?)</a>

  setInterval(function() {
    temp();
  }, 300000);

}
