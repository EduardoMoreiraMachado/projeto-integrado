'use strict'

import { listaCursos } from "./api.js";

const criarTitulo = async (array) => {

    let cursos = await array;

    let parameter = window.location.search.substring(1);
    let sigla = parameter.split('=')[1];

    const tituloCurso = document.querySelector('.course-name');

    if (sigla == 'DS') {

        tituloCurso.textContent = cursos[0].nome;

    } else {

        tituloCurso.textContent = cursos[1].nome;

    }

}

criarTitulo(listaCursos());