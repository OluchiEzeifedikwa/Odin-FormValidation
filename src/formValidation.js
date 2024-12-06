
function validateEmail() {
  const email = document.getElementById("mail");
  
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
}

validateEmail();

export { validateEmail }

// const email = document.getElementById("mail");

// email.addEventListener("input", () => {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an email address!");
//   } else {
//     email.setCustomValidity("");
//   }
// });
