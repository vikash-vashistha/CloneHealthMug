// Advertisment
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
var myIndex = 0;
carousel();

function carousel() {
  var x = document.getElementsByClassName("Slides");
  var y = document.getElementsByClassName("text");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.color = "black";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  y[myIndex - 1].style.color = "#51c9a6";
  setTimeout(carousel, 4000); // change in every 4 sec//
}

// START CONSULTATION
var btn = document.querySelectorAll(".SC_H_btn");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    window.location.href = "SC_H.html";
  });
}

// Blog
document.querySelector("#blog1").addEventListener("click", function () {
  window.location.href = "blog1.html";
});
