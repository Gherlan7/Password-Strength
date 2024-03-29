var pass = document.getElementById("password");
var msg = document.getElementById("message");
var strength = document.getElementById("strength");
var eyeicon = document.getElementById("eyeicon");

pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
  //Implementing the algorithm for the password strength
  if (pass.value.length < 4) {
    strength.innerHTML = "weak";
    pass.style.borderColor = "#ff5925";
    msg.style.color = "#ff5925";
  } else if (pass.value.length >= 4 && pass.value.length < 8) {
    strength.innerHTML = "medium";
    pass.style.borderColor = "yellow";
    msg.style.color = "yellow";
  } else if (pass.value.length >= 8) {
    strength.innerHTML = "strong";
    pass.style.borderColor = "green";
    msg.style.color = "green";
  }
});
//Implementing the toggle of the eye icons, interchanging them
eyeicon.onclick = function () {
  if (pass.type == "password") {
    pass.type = "text";
    eyeicon.src = "eye-icons/eye-open.png";
  } else {
    pass.type = "password";
    eyeicon.src = "eye-icons/eye-close.png";
  }
};
