document.querySelector("#field").addEventListener("submit", signIn);

var arr = JSON.parse(localStorage.getItem("dataBase")) || [];
function signIn(event) {
  event.preventDefault();
  var signin = document.querySelector("#email").value;
  var pass = 0;
  var obj = {
    email: signin,
    pass: pass,
  };
  arr.push(obj);
  localStorage.setItem("dataBase", JSON.stringify(arr));
  window.location.href = "signUp.html";
}

document.querySelector("#return").addEventListener("click", function () {
  window.location.href = "landing_page.html";
});
