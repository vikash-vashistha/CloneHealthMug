// var myIndex = 0;
// carousel();

// function carousel() {
//   var x = document.getElementsByClassName("Slides");
//   for (var i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   myIndex++;
//   if (myIndex > x.length) {
//     myIndex = 1;
//   }
//   x[myIndex - 1].style.display = "block";
//   setTimeout(carousel, 4000); // change in every 4 sec//
// }

var slider = document.querySelectorAll(".slider");
for (var i = 0; i < slider.length; i++) {
  slider[i].addEventListener("click", function () {
    if (i == 0) {
      slider[1].style.display = "none";
      slider[2].style.display = "none";
    } else if (i == 1) {
      slider[0].style.display = "none";
      slider[2].style.display = "none";
    } else {
      slider[0].style.display = "none";
      slider[1].style.display = "none";
    }
  });
}
