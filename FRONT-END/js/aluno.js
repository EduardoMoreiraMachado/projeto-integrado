'use strict'

import { listaDisciplinas } from "./api.js";

let parameter = window.location.search.substring(1);
let matricula = parameter.split('=')[1];
let api = listaDisciplinas(matricula);

const linkVoltar = async (array) => {

    let aluno = await array;

    const link = document.querySelector('.link');
    link.href = `listaAlunos.html?curso=${aluno[0].curso}`;
    
}

const infoAluno = async (array) => {

    let aluno = await array;
    
    const student = document.querySelector('.student-container');

    const infoAluno = document.createElement('div');
    infoAluno.classList.add('student-info');

    infoAluno.innerHTML = `
        <img class="student-image" src="${aluno[0].foto}">
        <span class="student-name">${aluno[0].nome}</span>
    `

    student.appendChild(infoAluno);

}

const notasAluno = async (array) => {

    let aluno = await array;

    const main = document.querySelector('main');

    const disciplinasAluno = document.createElement('div');
    disciplinasAluno.classList.add('student-subjects');

    for (let i = 1 ; i < aluno.length ; i ++ ) {

        const disciplinaInfo = document.createElement('div');
        disciplinaInfo.classList.add('subject-info');

        const nota = document.createElement('span');
        nota.classList.add('subject-grade');
        nota.textContent = `${aluno[i].media}`;

        disciplinaInfo.appendChild(nota);

        const barraFixa = document.createElement('div');
        barraFixa.classList.add('subject-bar');

        disciplinaInfo.appendChild(barraFixa);

        const barraNota = document.createElement('div');
        barraNota.classList.add('grade-bar');
        barraNota.style.height = `${aluno[i].media}%`

        barraFixa.appendChild(barraNota);

        const nomeDisciplina = document.createElement('span');
        nomeDisciplina.classList.add('subject-name');
        nomeDisciplina.textContent = `${aluno[i].nome}`;

        disciplinaInfo.appendChild(nomeDisciplina);

        disciplinasAluno.appendChild(disciplinaInfo);

        switch (aluno[i].status) {

            case "Aprovado" :

                barraNota.style.backgroundColor = '#3347B0';
                barraNota.style.boxShadow = '0px 0px 24px #3347B0';
                nota.style.color = '#3347B0';
                break;

            case "Exame" :

                barraNota.style.backgroundColor = '#E5B657';
                barraNota.style.boxShadow = '0px 0px 24px #E5B657';
                nota.style.color = '#E5B657';
                break;

            case "Reprovado" :

                barraNota.style.backgroundColor = '#C11010';
                barraNota.style.boxShadow = '0px 0px 24px #C11010';
                nota.style.color = '#C11010';
                break;

            default :

                break;

        } 

    }

    main.appendChild(disciplinasAluno);

}

linkVoltar(api);

infoAluno(api);

notasAluno(api);