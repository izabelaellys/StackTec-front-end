const registerForm = document.getElementById("register-form");
const emailInput = document.getElementById("email");

registerForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = emailInput.value;
  if (email.indexOf("@fatec.sp.gov.br") === -1) {
    emailInput.classList.add("invalid");
    const errorMessage = emailInput.parentNode.querySelector(".error-message");
    errorMessage.innerHTML = "O e-mail precisa ser da Fatec";
    errorMessage.style.display = "block";
  } else {
    emailInput.classList.remove("invalid");
    const errorMessage = emailInput.parentNode.querySelector(".error-message");
    errorMessage.style.display = "none";

    const formData = new FormData(registerForm);

    // Convert form data to JSON object
    const jsonObject = {};
    for (const [key, value] of formData.entries()) {
      if (key === 'roles') {
        jsonObject[key] = [value]; // Set roles field as an array with a single value
      } else {
        jsonObject[key] = value;
      }
    }


    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://192.168.0.10:8080/auth/signup');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Successful request
          registerForm.reset();
        } else {
          // Handle request error
          console.error("Request failed:", xhr.status);
        }
      }
    };

    // Send form data as JSON string
    xhr.send(JSON.stringify(jsonObject));
  }
});

