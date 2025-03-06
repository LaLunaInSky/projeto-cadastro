"use strict"

//senhaConfirme
//senha

const inputSenhas = [
    document.querySelector("#senha"),
    document.querySelector("#senhaConfirme")
]

const btnCadastrar = document.querySelector("#cadastrar")
const pSenhas = document.querySelector("#pSenhas")

inputSenhas.map((input)=>{
    const imageEye = input.nextSibling.nextSibling
    imageEye.addEventListener("click", ()=>{
        if (imageEye.getAttribute("src") == "./icons/eye-slash.svg") {
            imageEye.setAttribute("src", "./icons/eye.svg")
            input.setAttribute("type", "text")
        } else {
            imageEye.setAttribute("src", "./icons/eye-slash.svg")
            input.setAttribute("type", "password")
        }
    })

    input.addEventListener("input", ()=>{
        if (input.value != '') {

            if (inputSenhas[0].value != '' && inputSenhas[1].value != ''){
                if (inputSenhas[0].value != inputSenhas[1].value){ 
                    btnCadastrar.setAttribute("disabled", true)
                    pSenhas.classList.replace("text-transparent", "text-red-800")
                } else if (inputSenhas[0].value == inputSenhas[1].value) {
                    btnCadastrar.removeAttribute("disabled")
                    pSenhas.classList.replace("text-red-800", "text-transparent")
                }
            }
        }
    })
})