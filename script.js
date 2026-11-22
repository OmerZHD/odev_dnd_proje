const registrationForm = document.getElementById("registration-form");
const registrationMessage = document.getElementById("registration-message");

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    registrationMessage.hidden = false;
});