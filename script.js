const btnSignIn = document.getElementById("sign-in"),
        btnSignUp = document.getElementById("sign-up"),
        formResgister = document.querySelector(".register"),
        formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e =>{
    formResgister.classList.add("hide");
    formLogin.classList.remove("hide")
})

btnSignUp.addEventListener("click", e =>{
    formLogin.classList.add("hide");
    formResgister.classList.remove("hide")
})