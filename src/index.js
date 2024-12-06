import "./style.css";

import { validateEmail } from "./formValidation.js";

validateEmail();

// console.log("a");
// const validityState = validateEmail();
// console.log(validityState)
// if (validityState.valid) {
//   console.log("Email is valid");
// } else {
//   console.log(`Email is not valid: ${validityState.message}`);
// }

// const form = document.getElementById("form1");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

const email = document.getElementById("mail");

email.addEventListener("input", () => {});
