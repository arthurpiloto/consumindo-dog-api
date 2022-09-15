`use strict`
import { searchDog } from "./dog-api.js"

// Cria uma tag IMG para armazenar o src dela que vêm do Array
const createImg = (imgAdress) => {
    const img = document.createElement(`img`)
    img.src = imgAdress
    return img
}

// Pega a raça digitada pelo usuário e mostra na tela
const showGallery = async () => {
    const breed = document.getElementById(`breed`).value
    const images = await searchDog(breed)

    const gallery = document.getElementById(`gallery`)
    const tagImg = images.map(createImg)
    gallery.replaceChildren(...tagImg)
}

// É responsável por ler quando o usuário clica a tecla "Enter"
const handleKeypress = (event) => {
    if (event.key == "Enter") {
        showGallery()
    }
}

document.getElementById(`breed`).addEventListener(`keypress`, handleKeypress)