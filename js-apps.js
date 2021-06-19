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


function inverseArray(arr,num){
  var newArray=[];
  while(num >= 1){
  newArray.unshift([...arr])
  num--;
}
  return newArray;
}

inverseArray(['ama','kwajo','abena'],6)

let sCs = {
  conFahrenheit(celsius){
  var result;
  return result = (celsius * 9/5) + 32
  },
  conToCelsius(fahrenheit){
    var result;
    return result = (celsius * 9/5) + 32
  },
  calPower(work,te){
    return work/te
  },
  calcForce(mass,accel){
    return mass*accel;
  },
  calcToArea(l,b){
    return l * b;
  },
  calcToVolume(val){
    return val * 3
  },
  calcToDensity(m,v){
    return m/v;
  },
  
  calcSf(f,l){
    return (1/2) * (f/l);
  }
}



