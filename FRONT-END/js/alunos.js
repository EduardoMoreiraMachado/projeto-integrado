'use strict'

import { listaAlunos, listaAlunosStatus } from "./api.js";

const cardsAlunos = async (array) => {

    let alunos = await array;
    const cards = document.querySelector('.students-container');
    cards.textContent = '';

    for (let i = 0 ; i < alunos.length ; i++) {

        const item = document.createElement('a');
        item.href = `aluno.html?matricula=${alunos[i].matricula}`;
        item.classList.add('student-item');

        item.innerHTML = `
            <img class="student-image" src="${alunos[i].foto}">
            <span class="student-name">${alunos[i].nome}</span>
        ` 
        cards.appendChild(item);

        if(alunos[i].status ==  "Cursando") {

            const cursandoCor = getComputedStyle(document.documentElement).getPropertyValue('--main-color'); 

            item.style.backgroundColor = cursandoCor;

        } else {

            const finalizadoCor = getComputedStyle(document.documentElement).getPropertyValue('--tertiary-color'); 


            item.style.backgroundColor = finalizadoCor

        }

    }

}


const changeScreen = () => {

    let parameter = window.location.search.substring(1);

    let sigla = parameter.split('=')[1];

    cardsAlunos(listaAlunos(sigla));

}

const createCardsStatus = (status) => {

    let parameter = window.location.search.substring(1);

    let sigla = parameter.split('=')[1];

    cardsAlunos(listaAlunosStatus(status, sigla));

} 

const cases = () => {

    const status = document.getElementById('status').value;

    switch (status) {

        case 'status' :
            changeScreen();
            break;

        case 'finalizado' :
            createCardsStatus(status);
            break;

        case 'cursando' :
            createCardsStatus(status);
            break;

    }

} 

changeScreen();
document.getElementById('status').addEventListener('change', cases);