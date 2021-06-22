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
  document.getElementById("clock").innerText =
    hour + " : " + min + " : " + sec; /* adding time to the div */
  var t = setTimeout(function () {
    currentTime();
  }, 1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}
window.addEventListener('load',currentTime)
//##########################################
//End javascript clock code 

function celToFah() {
  var x = document.getElementById("result1") 
  var celsiusInn = document.getElementById("celsius-input").value;
  var fahrenheit = (celsiusInn * 9) / 5 + 32;
  x.innerHTML = fahrenheit;
}
window.addEventListener('load', function() {
  var calc = document .getElementById("onclick-one");
  calc.addEventListener( 'click', celToFah )
})

;
function fahToCel() {
  var x = document.getElementById("result2")
  var fahrenheitInn = document.getElementById("fahrenheit-input").value;
  var celsius = (fahrenheitInn - 32) * (5 / 9);
  x.innerHTML = celsius;
}
window.addEventListener('load',function(){
  var calc = document.getElementById("onclick-two");
  calc.addEventListener('click', fahToCel)
}
)



var obj = {
  celToFah() {
    var celsiusInn = document.getElementById("celsius-input").value;
    var fahrenheit;
    fahrenheit = (celsiusInn * 9 / 5) + 32; 
    document.getElementById('result1').innerHTML = fahrenheit;
  },
  fahToCel: function() {
    var fahrenheitInn = document.getElementById('fahrenheit-input').value;
    var celsius;
    celsius = (fahrenheitInn - 32) * (5 / 9); 
    document.getElementById('result1').innerHTML = celsius;
  }
}


// initialize your variables outside the function var count = 0; 
var clearTime; var seconds = 0, minutes = 0, hours = 0; 
var clearState; var secs, mins, gethours ; 
function startWatch( ) { 
  //seconds
  secs = ( seconds < 10 ) ? ( '0' + seconds ) : ( seconds );
  if (seconds === 60) {
     seconds = 0;
     minutes = minutes + 1
   }  
  //minutes
   mins = ( minutes < 10 ) ? ( '0' + minutes + ': ' ) : ( minutes + ': ' ); 
  //hours
   gethours = ( hours < 10 ) ? ( '0' + hours + ': ' ) : ( hours + ': ' ); 
  if ( minutes === 60 ) {
     minutes = 0; 
     hours = hours + 1;
     } 
  //Display values
   var x = document .getElementById("timer");
    x.innerHTML = 'Time: ' + gethours + mins + secs;
  //run variables 
    seconds++;
  //Function recall
    clearTime = setTimeout(startWatch(),1000); 
  }
    function startTime() { 
  if ( seconds === 0 && minutes === 0 && hours === 0 ) { 
    var fulltime = document.getElementById("fulltime"); 
    fulltime.style.display = "none";  
    this.style.display = "none"; 
   startWatch();
  } 

  } 
  // startTime() /* you need to bind the startTime( ) function to any event type to keep the stop watch alive ! */ 
   window.addEventListener( 'load', function ( ) { var start = document .getElementById("start"); 
   start.addEventListener( 'click', startTime() ); }); 
   // startwatch.js end 



