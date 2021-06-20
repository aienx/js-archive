//Name Password Text module
//Declared global variable userList to store user names from function.
//User list is an array.

let htDomVal = "";

function curseFinder(val) {
  let cursRegex = /fool|fuck|stupid|damn|asshole|jackass|wanker|bitch/i;
  if (cursRegex.test(val)) {
    htDomVal = "This content is not allowed because it contains vague words";
  } else {
    htDomVal = "Content is allowed";
  }
  return htDomVal;
}

function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}
currentTime();


function celToFah(){
  var celsiusInn = document.getElementById('celsius-input').value;
  var fahrenheit;
   fahrenheit = (celsiusInn * 9/5) + 32
document.getElementById('result1').innerHTML = fahrenheit;
}
function fahToCel(){
  var fahrenheitInn = document.getElementById('fahrenheit-input').value;
  var celsius;
  celsius = (fahrenheitInn - 32) * (5/9)
document.getElementById('result2').innerHTML = celsius;
}




