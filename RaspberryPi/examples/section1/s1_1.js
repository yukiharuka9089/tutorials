onload = function() {
  var onoff = document.getElementById("onoff");
  var ledView = document.getElementById("ledView");
  var v = 0;
  onoff.onclick = function() {
    v = v === 0 ? 1 : 0;
    ledView.style.backgroundColor = v == 1 ? "red" : "black";
  };
};
