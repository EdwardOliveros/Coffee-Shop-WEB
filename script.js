const btnSignIn = document.getElementById("sign-in"),
        btnSignUp = document.getElementById("sign-up"),
        formResgister = document.querySelector(".register"),
        formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e =>{
    formResgister.classList.add("hide");
    formLogin.classList.remove("hide");
})

btnSignUp.addEventListener("click", e =>{
    formLogin.classList.add("hide");
    formResgister.classList.remove("hide");
})



bars_search = document.getElementById("container-bars-search");
cover_container_search = document.getElementById("cover-container-search");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementsById("box-search");

//FUNCION PARA MOSTRAR EL BUSCADOR

