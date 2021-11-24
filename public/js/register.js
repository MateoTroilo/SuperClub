let registerName = document.querySelector("#register-name");
let registerMail = document.querySelector("#register-mail");
let registerPassword = document.querySelector("#register-password");
let warning = document.querySelector(".warning");
let warningMail = document.querySelector(".warning-mail");
let warningPassword = document.querySelector(".warning-password");
let contenedorInput = document.querySelector(".contenedor-input");
let contenedorInputMail = document.querySelector(".contenedor-input-mail");
let contenedorInputPassword = document.querySelector(".contenedor-input-password");

registerName?.addEventListener("click", () => {
    if (registerName.value == "") {
    warning.innerHTML = "incompleted"
    warning.style.color = "red"
    contenedorInput.classList.add("contenedor-input-warning")
    }
})

registerName?.addEventListener("keyup", () => {
    if (registerName.value.length < 6) {
        warning.innerHTML = "too short" 
        warning.style.color = "red"
        contenedorInput.classList.add("contenedor-input-warning")
    } else {
        warning.innerHTML = "great"
        warning.style.color = "green"
        contenedorInput.classList.remove("contenedor-input-warning")
    }
})

registerMail?.addEventListener("click", () => {
    if (registerMail.value == "") {
        warningMail.innerHTML = "incompleted"
        warningMail.style.color = "red"
        contenedorInputMail.classList.add("contenedor-input-warning")
    }
})


registerMail?.addEventListener("keyup", () => {
    if ((/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(registerMail.value) === true) {
        warningMail.innerHTML = "great"
        warningMail.style.color = "green"
        contenedorInputMail.classList.remove("contenedor-input-warning")
    } else {
        warningMail.innerHTML = "invalid"
        warningMail.style.color = "red"
        contenedorInputMail.classList.add("contenedor-input-warning")
    }

})

registerPassword?.addEventListener("click", () => {
    if(registerPassword.value == "") {
        warningPassword.innerHTML = "incompleted"
        warningPassword.style.color = "red"
        contenedorInputPassword.classList.add("contenedor-input-warning")
    } 
})

registerPassword?.addEventListener("keyup", () => {

    if (registerPassword.value.length < 8) {
        warningPassword.innerHTML = "too short";
        warningPassword.style.color = "red"
        contenedorInputPassword.classList.add("contenedor-input-warning")
    }
    else if (registerPassword.value.includes("password")){
        warningPassword.innerHTML = "no debe contener la palabra password";
        warningPassword.style.color = "red"
        contenedorInputPassword.classList.add("contenedor-input-warning")
    }
    else if ((/(?![a-zA-Z]*$)(?![0-9]*$)[a-zA-Z0-9]+/).test(registerPassword.value)) {
        warningPassword.innerHTML = "great";
        warningPassword.style.color = "green"
        contenedorInputPassword.classList.remove("contenedor-input-warning")
    } 
    
    else {
        warningPassword.innerHTML = "debe ingresar numeros y letras";
        warningPassword.style.color = "red"
    }

    
})



