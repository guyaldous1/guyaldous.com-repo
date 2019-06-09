//init
window.onload = function() {
  //time and date
  temp();
  timeDate();
  setInterval(function() {
    timeDate();
  }, 900);
  setInterval(function() {
    temp();
  }, 300000);


  //new lines
  setTimeout(function(){typeString("Welcome to the home directory for Guy Aldous", "0");}, 2000)
  setTimeout(function(){newLine('Guy is a web developer and designer from Melbourne, Australia')}, 6000);
  setTimeout(function(){newLine('How can I help you?')}, 13000);

  //CTAs
  setTimeout(function(){
    var element = document.getElementById("links");
    element.classList.add("nowvisible");
  }, 17000)

  //Memes
  setTimeout(function(){newMeme('What are you still doing here?')}, 25000);
  setTimeout(function(){newMeme("There really isn't much going on...")}, 29000);
  setTimeout(function(){newMeme("Just click one of links!")}, 33000);
  setTimeout(function(){newMeme("or...")}, 37000);
  setTimeout(function(){newMeme("you could try those buttons at the top")}, 39000);
  setTimeout(function(){newMeme("...only if you like fun though")}, 45000);

  //Toggle contact window
  var elo = document.querySelector('#contact-open');
  var elc = document.querySelector('#contact-close');
  var contactform = document.getElementById('contactform')

  elo.onclick = function() {
  contactform.classList.toggle('nowvisible');}
  elc.onclick = function() {
  contactform.classList.toggle('nowvisible');}
}
