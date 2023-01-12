const username = document.getElementById("name");
const password = document.getElementById("password");
const rPassword = document.getElementById("RPassword");
const email = document.getElementById("email");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  alert("a");
  e.preventDefault();

  chekcInputs();
});

function chekcInputs() {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const rPasswordValue = rPassword.value.trim();
  const emailValue = email.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "username can not be blank");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "email can not be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "provide valid email address");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "password can not be blank");
  } else {
    setSuccessFor(password);
  }

  if (rPasswordValue !== "") {
    if (passwordValue === rPasswordValue) {
      setSuccessFor(rPasswordValue);
    } else {
      setErrorFor(rPasswordValue, "rPasswordValue should be same as password");
    }
  } else {
    setErrorFor(password, "rpassword can not be blank");
  }
}
function setErrorFor(input, message) {
  const parentEle = input.parentElement;
  const small = parentEle.querySelector("small");
  small.innnerText = message;
  parentEle.className = "form-group error";
}
function setSuccessFor(input) {
  const parentEle = input.parentElement;
  parentEle.className = "form-group success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
