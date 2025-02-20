const inputNames = document.querySelectorAll(".dado");
const exclamationIcons = document.querySelectorAll(".attention");
const errorMessage = document.querySelectorAll(".error");
const btn = document.querySelector(".btn");
const originalFormBorders = document.querySelectorAll(".input");

btn.addEventListener("click", event => {
    event.preventDefault();
    inputNames.forEach((input, index) => {
        if(input.value === ""){
            originalFormBorders[index].classList.add("visible");
            errorMessage[index].classList.add("visible");
            exclamationIcons[index].classList.add("visible");
            originalFormBorders[index].classList.remove("green");
        } else {
            originalFormBorders[index].classList.remove("visible");
            errorMessage[index].classList.remove("visible");
            exclamationIcons[index].classList.remove("visible");
            originalFormBorders[index].classList.add("green");
        }
    });
});