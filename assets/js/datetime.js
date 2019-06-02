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
