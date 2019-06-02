//Type text helper
function typeString(string, elID) {
  var str = string.split("");
  var el = document.getElementById(elID);
  (function animate() {
    str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
    var running = setTimeout(animate, 60);
  })();
}

//new line of console
let newLineCounter = 1;
let newlinetarget = document.getElementById("console");
function newLine(string) {
  var elem = document.getElementById("blinker");
  elem.parentNode.removeChild(elem)
  newlinetarget.insertAdjacentHTML('beforeend', `<p><span class="precommand">root@guyaldous.com:~$ </span><span id="${newLineCounter}"></span><span id="blinker">_</span></p>`);
  setTimeout(function(){typeString(string, newLineCounter);
  newLineCounter++;}, 1000);
}

//new line of console
let memetarget = document.getElementById("memes");
function newMeme(string) {
  var elem = document.getElementById("blinker");
  elem.parentNode.removeChild(elem)
  memetarget.insertAdjacentHTML('beforeend', `<p><span class="precommand">root@guyaldous.com:~$ </span><span id="${newLineCounter}"></span><span id="blinker">_</span></p>`);
  setTimeout(function(){typeString(string, newLineCounter);
  newLineCounter++;}, 1000);
}
