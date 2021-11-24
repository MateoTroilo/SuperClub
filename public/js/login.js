let modalError = document.querySelector(".modal-error");
let loginContainer = document.querySelector(".login-container");
let  modalGrey = document.querySelector(".modal-grey");
let loginEmail = document.querySelector("#login-email");
let warningLogin = document.querySelector(".login-warning")
let contenedorInputLogin = document.querySelector(".contenedor-input-login")


loginContainer?.addEventListener("submit", (e) =>{
    e.preventDefault()
    modalError.style.display = "block";
})

modalGrey.addEventListener("click", ()=>{
    console.log("click")
    modalError.style.display= "none"
})

loginEmail.addEventListener("click", () =>{
    warningLogin.innerHTML="incompleted"
    warningLogin.style.color="red"
    contenedorInputLogin.classList.add("contenedor-input-warning")
})

loginEmail.addEventListener("keyup", () => {
    if ((/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(loginEmail.value) === true){
        warningLogin.innerHTML = "great!"
        warningLogin.style.color = "green"
        contenedorInputLogin.classList.remove("contenedor-input-warning")
    } else {
        warningLogin.innerHTML = "invalid"
        warningLogin.style.color = "red"
        contenedorInputLogin.classList.add("contenedor-input-warning")
    }
})