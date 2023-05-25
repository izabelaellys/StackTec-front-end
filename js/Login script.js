const loginForm = document.getElementById("formLogin");
const cookieValue = null;
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

    const formData = new FormData(loginForm);

    // Convert form data to JSON object
    const jsonObject = {};
    for (const [key, value] of formData.entries()) {
      jsonObject[key] = value;
    }


    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://192.168.0.10:8080/auth/signin');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Successful request
          loginForm.reset();

          /*const setCookieHeader = xhr.getResponseHeader('Set-Cookie');
          if (setCookieHeader) {
            // Extract the cookie value
            const cookieValue = setCookieHeader.split(';')[0];

            // Store the cookie value in memory, e.g., in a variable or localStorage
            // For example, using localStorage:
            localStorage.setItem('myCookie', cookieValue);
          }*/
        } else {
          // Handle request error
          console.error("Request failed:", xhr.status);
        }
      }
    };

    // Send form data as JSON string
    xhr.send(JSON.stringify(jsonObject));
});


const footerText = document.getElementById('footer-text');
let intervalID;

function typeFooterText() {
  const text = 'Feito por um bando de Guaxinins Raivosos';
  let i = 0;

  intervalID = setInterval(() => {
    if (i < text.length) {
      footerText.textContent += text[i];
      i++;
    } else {
      clearInterval(intervalID);
    }
  }, 100);
}

function clearFooterText() {
  footerText.textContent = '';
}

window.addEventListener('beforeunload', () => {
  clearInterval(intervalID);
  clearFooterText();
});

window.addEventListener('load', () => {
  setInterval(() => {
    clearFooterText();
    typeFooterText();
  }, 10000);
});
