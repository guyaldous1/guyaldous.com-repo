//Date and Time
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const daySuffix = function(i) {
  var j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
}
const elTime = document.getElementById('time');
const elDate = document.getElementById('date');
const elTemp = document.getElementById('temp');

const timeDate = function() {

  let now = new Date();

  let hours = now.getHours();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  let minutes = now.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;

  let seconds = now.getSeconds();
  seconds = seconds < 10 ? '0' + seconds : seconds;

  let day = now.getDate();
  day = daySuffix(day);

  let month = now.getMonth();
  month = months[month];

  let year = now.getFullYear();

  let date = `${month} ${day}, ${year}`;
  let time = `${hours}:${minutes}:${seconds}${ampm}`;

  //console.log(time + ' ' + date);

  elTime.innerHTML = time;
  elDate.innerHTML = date;
}


//Retrieve Melbourne Temp From BOM

//Helper function
/*
 * Usage:
 * getJSON("https://jsonplaceholder.typicode.com/comments", { postId: 1})
 *  .then(data => {
 *    console.log(data);
 *  });
 */

function getJSON(url, qs_params) {
  function buildQueryString(params) {
    return Object.entries(params).map(d => `${d[0]}=${d[1]}`).join('&');
  }

  return new Promise((resolve, reject) => {
    const qs = qs_params ? '?' + buildQueryString(qs_params) : '';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${url}${qs}`);

    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 400) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        resolve(xhr.responseText);
      }
    };
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

function temp() {
  getJSON("https://cors-anywhere.herokuapp.com/http://reg.bom.gov.au/fwo/IDV60901/IDV60901.95936.json")
    .then(data => {
      let thedata = data.observations.data[0];
      //console.log(thedata);
      elTemp.innerHTML = `${thedata.air_temp}ºC ${thedata.apparent_t}ºC`;


    });
}

//Type text helper
function typeString(string, elID) {
  var str = string.split("");
  var el = document.getElementById(elID);
  (function animate() {
    str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
    var running = setTimeout(animate, 90);
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

//init
window.onload = function() {

  typeString("welcome to the home directory for guy aldous", "0");

  temp();
  timeDate();

  setInterval(function() {
    timeDate();
  }, 900);

  setTimeout(function(){newLine('Guy is a web designer and developer from Melbourne, Australia')}, 6000);
  setTimeout(function(){newLine('How can I help you?')}, 14000);

  //<a href="/">Linkedin (y/n?)</a> | <a href="/">Lysdexia? (y/n?)</a> | <a href="/">Contact? (y/n?)</a>

  setInterval(function() {
    temp();
  }, 300000);

}
