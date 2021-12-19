document.querySelector("#sign").addEventListener("submit", signIn);

var arr = JSON.parse(localStorage.getItem("dataBase")) || [];
function signIn(event) {
  event.preventDefault();
  var email = document.querySelector("#email").value;
  var pass = document.querySelector("#pass").value;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].email == email && arr[i].pass == pass) {
      alert("🎊🎊Succesfully Sign-In🎊🎊");
      window.location.href = "otp.html";
      return;
    } else {
      alert("❌❌Wrong Details❌❌");
    }
  }
}

document.querySelector("#return").addEventListener("click", function () {
  window.location.href = "landing_page.html";
});
