document.querySelector("#enterotp").addEventListener("submit", signIn);

function signIn(event) {
  event.preventDefault();
  var otp = document.querySelector("#otp").value;
  window.location.href = "landing_page.html";
  // console.log(otp);
  // if (otp == "123") {
  //   alert("🎊🎊OTP varified🎊🎊");
  //   window.location.href = "landing_page.html";
  // } else {
  //   alert("❌❌OTP doesn't match❌❌");
  // }
}

document.querySelector("#return").addEventListener("click", function () {
  window.location.href = "index.html";
});
