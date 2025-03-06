"use strict"

//senhaConfirme
//senha

const inputSenhas = [
    document.querySelector("#senha"),
    document.querySelector("#senhaConfirme")
]

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
})