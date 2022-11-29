//Functions
function palindrome(str) {
  //remove non-numeric characters from parameter and convert case everything to same case
  var modified = str.toLowerCase().match(/[a-z0-9]/gi);
  console.log(modified)
  //copy and reverse modified parameter into variable
  var reversed = modified.slice().reverse();
  console.log(reversed)
  //iterate and check if each letter at each index of both arrays correspond thus a palindrome
  for (let i = 0; i < modified.length; i++) {
    if(modified[i] !== reversed[i]){
  //return false if letters at array[i] does not correspong
     return false
    }
  }
  //return true of palindrome
  return true ;
}
//Programme control
function DATACONTROL() {
  let resultDisp = document.getElementById("result1");
  let dataIn = document.getElementById("input-string").value;
  let dataOut = palindrome(dataIn);
  resultDisp.innerHTML = dataOut;
}
//Event Listeners
window.addEventListener("load", function () {
  var calc = document.getElementById("onclick-one");
  calc.addEventListener("click", DATACONTROL);
});
