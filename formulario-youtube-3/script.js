const inputs = document.querySelectorAll(".senha");
const btn = document.getElementById("btn");
const errorMessage = document.querySelectorAll(".msgerro");
const senha = document.getElementById("senha");
const senhaConfirmation = document.getElementById("password-confirmation")

btn.addEventListener("click", function (e) {
    e.preventDefault();
    inputs.forEach((input, indice) => {
        if (input.value.trim() === "") {
            inputs[indice].classList.add("error");
            errorMessage[indice].classList.add("visible");
            inputs[indice].classList.remove("check");
        } else {
            inputs[indice].classList.remove("error");
            errorMessage[indice].classList.remove("visible");
            inputs[indice].classList.add("check");
        }
    })

        if (senha.value.trim() && senha.value.length < 7) {
            inputs[2].classList.add("error");
            inputs[2].classList.remove("check");
            errorMessage[2].classList.add("visible");
            errorMessage[2].innerHTML = "A senha deve ter no minimo 7 caracateres*"
        } else {
            errorMessage[3].innerHTML = "Campo obrigatório*"}
            
            
        if (senha.value !== senhaConfirmation.value && senha.value.trim() && senha.value.length < 7) {
            inputs[3].classList.add("error");
            errorMessage[3].classList.add("visible");
            inputs[3].classList.remove("check");
            errorMessage[3].innerHTML = "As senhas não são iguais"
        }
})      