/*
1- mostrar a mensagem de aviso em vermelho
2- realizar um calculo pegando os valores que estão preenchidos
3- colocar resultado em uma variavel
4- fazer a tela aparecer com resultado
5- fazer uma função para cada tipo de radio
*/

const form = document.querySelector(".form")
const results = document.querySelector(".results")
const yourResults = document.querySelector(".your-results")
const parentNodes = document.querySelectorAll(".Mortgage-Amount, .Mortgage-Term-Interest-Rate > div")



form.addEventListener("reset", (event) => {
    const parentNodeWhitMessageError = document.querySelectorAll("div.error")
    parentNodeWhitMessageError.forEach((parentNode) => {
        parentNode.classList.remove("error")
    })
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let radioSelected = false
    const inputRadios = form.querySelectorAll("input[type='radio']")
    const mortgageType = form.querySelector(".Mortgage-Type")

    inputRadios.forEach((inputRadio) => {
        if(inputRadio.checked){
            radioSelected = true
        }
    })
    
    if(!radioSelected){
        mortgageType.classList.add("error")
    } else {
        mortgageType.classList.remove("error")
    }

    parentNodes.forEach((parentNode) => {
        const input = parentNode.querySelector("input")
        
        if (input.value === "") {
            parentNode.classList.add("error")
        } else {
            parentNode.classList.remove("error")
        }
    })

})