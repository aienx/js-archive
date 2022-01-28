function celToFah() {
  var x = document.getElementById("result1");
  var celsiusInn = document.getElementById("celsius-input").value;
  var fahrenheit = (celsiusInn * 9) / 5 + 32;
  x.innerHTML = fahrenheit;
}
window.addEventListener("load", function () {
  var calc = document.getElementById("onclick-one");
  calc.addEventListener("click", celToFah);
});
function fahToCel() {
  var x = document.getElementById("result2");
  var fahrenheitInn = document.getElementById("fahrenheit-input").value;
  var celsius = (fahrenheitInn - 32) * (5 / 9);
  x.innerHTML = celsius;
}
window.addEventListener("load", function () {
  var calc = document.getElementById("onclick-two");
  calc.addEventListener("click", fahToCel);
});
