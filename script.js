const userName = document.querySelector(".user-name");
const userEmail = document.querySelector(".user-email");
const userPass = document.querySelector(".user-pass");
const submit = document.querySelector(".submit");
const nameMsg = document.querySelector(".name-msg");
const emailMsg = document.querySelector(".email-msg");
const passMsg = document.querySelector(".pass-msg");
const submitMsg = document.querySelector(".submit-msg");

submit.addEventListener("click", login);
function login(event) {
  event.preventDefault();
  const userNameValue = userName.value;
  const userEmailValue = userEmail.value;
  const userPassValue = userPass.value;
  nameMsg.innerText = "";
  emailMsg.innerText = "";
  passMsg.innerText = "";
  userName.classList.remove("error-border");
  userEmail.classList.remove("error-border");
  userPass.classList.remove("error-border");
  let ifSubmit = true;

  // Validate Name
  function validateName(name) {
    let englishLetters = /^[A-Za-z]+$/;
    if (userNameValue.length === 0) {
      nameMsg.innerText = "Please enter a valid name";
      userName.classList.add("error-border");
      return (ifSubmit = false);
    }
    if (userNameValue.length > 15) {
      nameMsg.innerText = "Not over than 15 characters";
      userName.classList.add("error-border");
      return (ifSubmit = false);
    }
    if (!englishLetters.test(name)) {
      nameMsg.innerText = "Use english letters";
      userName.classList.add("error-border");
      return (ifSubmit = false);
    }
    return (ifSubmit = true);
  }
  validateName(userNameValue);

  // Validate Email
  function validateEmail(email) {
    if (
      email.length === 0 ||
      email.indexOf("@") === -1 ||
      email.indexOf(".") === -1
    ) {
      emailMsg.innerText = "Please enter a valid email";
      userEmail.classList.add("error-border");
      return (ifSubmit = false);
    }
    return (ifSubmit = true);
  }
  validateEmail(userEmailValue);

  // Validate Password
  function validatePass(password) {
    let upper = /[A-Z]/,
      lower = /[a-z]/,
      number = /[0-9]/;
    if (
      !(
        upper.test(password) &&
        lower.test(password) &&
        number.test(password) &&
        password.length >= 8
      )
    ) {
      passMsg.innerText = "Please enter a valid password";
      userPass.classList.add("error-border");
      return (ifSubmit = false);
    } else {
      return (ifSubmit = true);
    }
  }
  validatePass(userPassValue);

  if (ifSubmit) {
    submitMsg.innerText = "You login successfully";
    submitMsg.classList.add("correct");
  } else {
    submitMsg.classList.remove("correct");
    submitMsg.innerText = "Error";
  }
}
