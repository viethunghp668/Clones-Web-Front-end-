window.addEventListener("scroll", function () {
  var transform = "translateY(50px)";
  var temp = document.getElementById("trans-l");
  var x, result;
  var scroll = document.documentElement.scrollTop;
  if (scroll <= 250 && scroll > 200) {
    x = 50 - (scroll - 200);
  }
  result = transform.replace("50", x);
  temp.style.transform = result;
})
