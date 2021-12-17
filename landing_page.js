// Advertisment
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

// SignIn
document.querySelector("#signin").addEventListener("click", function () {
  window.location.href = "signin_signup.html";
});

// Contact us

document.querySelector("#contact").addEventListener("click", function () {
  window.location.href = "contactUs.html";
});

// Sell with us

document.querySelector("#sellWithUs").addEventListener("click", function () {
  window.location.href = "sellWithUs.html";
});

// Top Categories
// deals
document.querySelector("#TC_deals").addEventListener("click", function () {
  window.location.href = "TC_deals.html";
});

// Allopathy
var allopathy = document.querySelectorAll(".allopathy");
for (var i = 0; i < allopathy.length; i++) {
  allopathy[i].addEventListener("click", function () {
    window.location.href = "allopathy.html";
  });
}

// Ayurveda
var ayurveda = document.querySelectorAll(".ayurveda");
for (var i = 0; i < ayurveda.length; i++) {
  ayurveda[i].addEventListener("click", function () {
    window.location.href = "ayurveda.html";
  });
}

// Bubble image

// var bubble = document.querySelectorAll(".bubble");
// for (var i = 0; i < bubble.length; i++) {
//   var event1 = bubble[i];
//   bubble[i].addEventListener("mouseenter", function () {
//     event1.style.width = "150%";
//   });
//   bubble[i].addEventListener("mouseleave", function () {
//     event1.style.width = "100%";
//   });
// }
