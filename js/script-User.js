const btnSignIn = document.getElementById("sign-in"),
        btnSignUp = document.getElementById("sign-up"),
        formResgister = document.querySelector(".register"),
        formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e =>{
    formResgister.classList.add("hide");
    formLogin.classList.remove("hide");
});

btnSignUp.addEventListener("click", e =>{
    formLogin.classList.add("hide");
    formResgister.classList.remove("hide");
});

document.addEventListener("DOMContentLoaded", function() {
    const usernameForm = document.getElementById("usernameForm");
    
    usernameForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const usernameInput = document.getElementById("username");
      const username = usernameInput.value;
      
      localStorage.setItem("username", username);

      const welcomeMessage = `¡Bienvenido, ${username}!`;
        alert(welcomeMessage);
      
      window.location.href = "index.html";
    });
  });
  