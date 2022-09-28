'use strict'

import { listaCursos } from "./api.js";

let api = listaCursos();

const addIcons = async (array) => {

    let cursos = await array;
    const cards = document.querySelector('.courses-container');
    
    for (let i = 0 ; i < cursos.length ; i++) {

        const link = document.createElement('a');
        link.classList.add('course-item');

        link.innerHTML = `
            <img src="${cursos[i].icone}" class="course-icon">
            <span class="course-text">${cursos[i].nome2}</span>
        `

        link.id = cursos[i].sigla;
        link.href = `./FRONT-END/pages/listaAlunos.html?curso=${cursos[i].sigla}`;

        cards.appendChild(link);
        
    }

}

addIcons(api);