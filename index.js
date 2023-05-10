function convert() {  
  var deg = document.getElementById("deg").value;  
  var unit = document.getElementById("unit").value;  
  var res;
  const tar = document.getElementById("res");
  const deg_const = document.getElementById('deg');
  const unit_const = document.getElementById('unit');

  if (!isNaN(parseFloat(deg)) && isFinite(deg)) {
    deg = Number(deg);
    if (unit == 'Fahrenheit') {
      res = (deg - 32) * 5/9;
      res = res.toFixed(4).toString() + ' °C';
    } else {
      res = (deg * 1.8) + 32;
      res = res.toFixed(4).toString() + ' °F';
    }

    tar.value = res;
    deg_const.value = deg;
    unit_const.value = unit;
    localStorage.setItem("res", res);
    localStorage.setItem("deg", deg);
    localStorage.setItem("unit", unit);
  } else {	
    alert("Enter valid number as degree");
  }
}

window.onload = function() {
  var savedRes = localStorage.getItem("res");
  var savedDeg = localStorage.getItem("deg");
  var savedUnit = localStorage.getItem("unit");
  const tar = document.getElementById("res");
  const deg_const = document.getElementById('deg');
  const unit_const = document.getElementById('unit');
  
  tar.value = ''; // Set the value of the target element to empty
  deg_const.value = ''; // Set the value of the degree input field to empty
  unit_const.value = ''; // Set the value of the unit input field to empty
  
  if (savedRes) {
    tar.value = savedRes;
  }
  if (savedDeg) {
    deg_const.value = savedDeg;
  }
  if (savedUnit) {
    unit_const.value = savedUnit;
  }

};
