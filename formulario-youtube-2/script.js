const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkInputs();
})

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = username.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue === "") {
        setErrorFor(username, "Campo obrigatório*");
    } else {
        setSuccessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "Campo obrigatório*");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Insira um email válido*")
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "Campo obrigatório*");
    } else if (passwordValue.length <= 7) {
        setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres*")
    } else {
        setSuccessFor(password);
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "Campo obrigatório*");
    } else if (passwordConfirmationValue != passwordValue) {
        setErrorFor(passwordConfirmation, "As senhas são diferentes*")
    } else {
        setSuccessFor(passwordConfirmation);
    }

    const formControls = form.querySelectorAll("form-control")
        const formIsValid = [...formControls].every(formControl => {
            return (formControl.className === "form-control success")
        });

        if (formIsValid) {
            console.log("O formulário foi validado com sucesso!")
        }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    // Adiciona a mensagem de erro
    small.innerText = message;

    // Adiciona a classe de erro
    formControl.className = "form-control error"
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    // Adiciona a classe de sucesso
    formControl.className = "form-control success"
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}