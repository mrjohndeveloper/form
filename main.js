let login = document.querySelector("h2");
let singup = document.querySelector(".singup");
let log = document.querySelector(".login");
let form = document.querySelector("form");
let bgtext = document.querySelector(".bg-text");
let btn = document.querySelectorAll(".btn");
let createUsername = document.querySelector("#createUsername");
let createPassword = document.querySelector("#createPassword");
let password = document.querySelector("#password");
let checkpassword = document.querySelector("#checkpassword");
let checkusername = document.querySelector("#checkusername");
Array.from(btn);
let correctName = /^[A-z]{2,}$/;
let correctPassword = /^[A-Za-z0-9]{8,}$/;


// singup and login buttons

login.addEventListener("click", () => {
  if (login.textContent == "LOGIN") {
    login.textContent = "SING UP";
    singup.style.left = "0%";
    log.style.left = "100%";
    form.style.height = "350px";
  } else if (login.textContent == "SING UP") {
    login.textContent = "LOGIN";
    singup.style.left = "-100%";
    log.style.left = "0%";
    form.style.height = "280px";
  }
});

// sing up button
btn[0].addEventListener("click", (e) => {
  e.preventDefault();
  if (
    correctName.test(createUsername.value) &&
    correctPassword.test(createPassword.value) &&
    createPassword.value == password.value
  ) {
    bgtext.textContent = "success";
    bgtext.classList.add("success");
    bgtext.classList.remove("error");
  } else {
    bgtext.textContent = "error";
    bgtext.classList.remove("success");
    bgtext.classList.add("error");
  }
});

// login button
btn[1].addEventListener("click", (e) => {
  e.preventDefault();
  if (
    (createUsername.value == checkusername.value ||
      correctName.test(checkusername.value)) &&
    (createPassword.value == checkpassword.value ||
      "Beharus001" == checkpassword.value)
  ) {
    bgtext.textContent = "success";
    bgtext.classList.add("success");
    bgtext.classList.remove("error");
  } else {
    bgtext.classList.remove("success");
    bgtext.textContent = "error";
    bgtext.classList.add("error");
  }
});