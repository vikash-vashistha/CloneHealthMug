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
    window.location.href = "startConsultation.html";
  });
}
// Blog
document.querySelector("#blog1").addEventListener("click", function () {
  window.location.href = "blog1.html";
});

document.querySelector("#blog2").addEventListener("click", function () {
  window.location.href = "blog2.html";
});

document.querySelector("#blog3").addEventListener("click", function () {
  window.location.href = "blog3.html";
});

document.querySelector("#blog4").addEventListener("click", function () {
  window.location.href = "blog4.html";
});

document.querySelector("#blog5").addEventListener("click", function () {
  window.location.href = "blog5.html";
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

// Homeopathy
var homeopathy = document.querySelectorAll(".homeopathy");
for (var i = 0; i < homeopathy.length; i++) {
  homeopathy[i].addEventListener("click", function () {
    window.location.href = "homeopathy.html";
  });
}

// Unani
var unani = document.querySelectorAll(".unani");
for (var i = 0; i < unani.length; i++) {
  unani[i].addEventListener("click", function () {
    window.location.href = "unani.html";
  });
}

// SHOP BY HEALTH CONCERN
document.querySelector("#arthritis").addEventListener("click", function () {
  window.location.href = "arthritis.html";
});
document.querySelector("#diabetes").addEventListener("click", function () {
  window.location.href = "diabetes.html";
});
