'use strict'

import { listaCursos } from "./api.js";

let api = listaCursos();

console.log(api)

const addIcons = async (array) => {

    let cursos = await array;
    const cards = document.querySelector('.courses-container');
    
    for (let i = 0 ; i < cursos.length ; i++) {

        const link = document.createElement('a');
        link.classList.add('course-item');

        link.innerHTML = `
            <img src="${cursos[i].icone}">
            <span class="course-text">${cursos[i].nome}</span>
        `

        link.id = cursos[i].sigla;
        link.href = `listaAlunos.html?curso=${cursos[i].sigla}`;
        
        cards.appendChild(link);

    }

}

addIcons(api);

export {

    addIcons

}